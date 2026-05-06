import React from 'react';
import { Users, Clock, Target, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const careerQs = [
  {
    icon: Target,
    t: "Parcours initial et orientation",
    l: [
      "Parlez-moi de vous et de votre parcours en quelques phrases",
      "Qu'est-ce qui a fait que vous avez choisi ce métier / cette voie ?",
      "Comment avez-vous découvert votre secteur d'activité ?",
      "Quel a été votre parcours scolaire et qu'est-ce qui vous a amené jusqu'ici ?",
      "Si vous n'aviez pas intégré telle école / entreprise, que vous manquerait-il aujourd'hui ?",
    ],
  },
  {
    icon: ArrowRight,
    t: "Évolution professionnelle",
    l: [
      "Décrivez-moi les grandes étapes de votre carrière professionnelle",
      "Quelle a été votre première expérience professionnelle marquante ?",
      "Pourquoi avez-vous quitté tel poste ou effectué une reconversion ?",
      "De quoi êtes-vous le plus fier dans votre parcours professionnel ?",
      "Parlez-moi d'une expérience où vous avez atteint un objectif que vous pensiez inatteignable",
    ],
  },
];

const currentExp = [
  {
    t: "Poste et responsabilités",
    l: [
      "Qu'avez-vous apprécié le plus dans votre dernier poste ?",
      "À quoi ressemble votre journée typique ?",
      "Quelles sont vos principales responsabilités actuellement ?",
      "Parlez-moi d'une situation où vous avez démontré vos capacités de leadership / management",
      "Comment un membre de votre équipe vous décrirait-il ?",
    ],
  },
  {
    t: "Compétences et défis",
    l: [
      "Quelles compétences font votre vraie valeur ajoutée ? Expliquez-moi concrètement",
      "Quelles ont été les principales difficultés rencontrées dans votre parcours ?",
      "Comment gérez-vous la pression et les défis dans votre métier ?",
      "De quelle négociation êtes-vous le plus fier ?",
    ],
  },
];

const reflection = [
  {
    t: "Apprentissages et regrets",
    l: [
      "Si vous pouviez revenir dans le passé, que feriez-vous différemment ?",
      "Quelle est la leçon la plus importante que vous ayez apprise dans votre carrière ?",
      "Quel conseil donneriez-vous à votre moi de 20 ans ?",
      "Qu'est-ce qui vous manquait quand vous avez commencé votre carrière ?",
    ],
  },
  {
    t: "Vision du secteur et des jeunes diplômés",
    l: [
      "Qu'attendez-vous d'une personne qui a fait une école de commerce ?",
      "Selon vous, que manque-t-il aux jeunes diplômés aujourd'hui ?",
      "Comment voyez-vous l'évolution de votre secteur dans les prochaines années ?",
    ],
  },
  {
    t: "Questions personnelles et passions",
    l: [
      "Quelles sont vos passions et comment vous aident-elles dans votre vie professionnelle ?",
      "Comment maintenez-vous l'équilibre entre vie professionnelle et personnelle ?",
      "Qu'est-ce qui vous motive au quotidien dans votre travail ?",
    ],
  },
];

const profiles = [
  {
    t: "Pour un entrepreneur",
    l: [
      "Qu'est-ce qui vous a poussé à créer votre entreprise ?",
      "Quel a été le plus grand défi lors de la création ?",
      "Comment avez-vous financé votre projet au début ?",
    ],
  },
  {
    t: "Pour un manager / dirigeant",
    l: [
      "Comment organisez-vous votre équipe et vos projets ?",
      "Quelle est votre philosophie de management ?",
      "Comment motivez-vous vos collaborateurs ?",
    ],
  },
  {
    t: "Pour un professionnel international",
    l: [
      "Quelles différences avez-vous observées avec les entreprises à l'étranger ?",
      "Comment votre expérience internationale a-t-elle enrichi votre parcours ?",
    ],
  },
];

const tips = [
  {
    t: "Stratégie de questionnement",
    d: "Il ne faut pas arriver avec 20 questions préparées à l'avance et les poser une par une, mais au contraire rebondir et adapter les questions à ce que la personne vous dit. Posez des questions en entonnoir et structurées : passé, présent, futur. Prenez des notes brèves pendant l'interview pour faciliter la restitution finale.",
  },
  {
    t: "Choix du juré",
    d: "Ne choisissez pas nécessairement la personne qui vous paraît la plus souriante : c'est celle que tous les autres candidats ont dû choisir. Tournez-vous plutôt vers la personne plus en retrait, qui a donc été moins interrogée. Le choix du juré est très important car il faut pouvoir tenir 9 minutes d'échange.",
  },
  {
    t: "Synthèse finale",
    d: "La minute de synthèse est cruciale : elle doit retracer ce que vous avez compris de la personne interviewée et montrer votre capacité d'écoute active et de prise de recul. C'est l'occasion de démontrer votre finesse d'analyse et votre capacité de synthèse.",
  },
];

const EntretienInverseGEMPage = () => {
  return (
    <MethodologyShell
      moduleLabel="Format spécialisé · GEM"
      icon={Users}
      titlePrefix="Entretien Inversé"
      titleAccent="GEM"
      intro="Guide complet pour réussir cette partie unique de l'oral de Grenoble École de Management — où vous menez l'entretien."
      cta={{
        title: "Préparez votre entretien inversé",
        text: "Maîtrisez l'art du questionnement et de la synthèse avec nos coachs spécialisés sur le format GEM.",
      }}
    >
      <MethodIntroCard icon={Clock} title="Comprendre le format de l'entretien inversé">
        <p className="mb-3">
          L'entretien inversé à GEM dure <strong className="text-pr-black">10 minutes</strong> : 9 minutes
          d'interview avec un membre du jury de votre choix, suivies d'une minute de synthèse. Cette partie
          constitue le cœur original de l'oral de GEM, où vous menez l'entretien en posant des questions
          sur le parcours professionnel du juré.
        </p>
        <p>
          Il est essentiel d'écouter attentivement les présentations des membres du jury au début pour
          choisir la personne que vous souhaitez interviewer.
        </p>
      </MethodIntroCard>

      {/* Parcours */}
      <MethodSection label="Section 01" title="Questions sur le parcours professionnel et scolaire" icon={Target}>
        <div className="grid md:grid-cols-2 gap-5">
          {careerQs.map((g) => (
            <div key={g.t} className="bg-white border border-pr-gray-light rounded-lg p-6">
              <h4 className="font-dm-serif text-lg text-pr-black mb-3 flex items-center gap-2">
                <g.icon className="w-5 h-5 text-pr-orange-dark" strokeWidth={1.6} />
                {g.t}
              </h4>
              <div className="h-px w-8 bg-pr-orange mb-4" />
              <ul className="space-y-2 text-sm text-pr-gray-dark">
                {g.l.map((q) => <li key={q}>— {q}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Expérience actuelle */}
      <MethodSection label="Section 02" title="Questions sur l'expérience actuelle" icon={MessageCircle}>
        <div className="grid md:grid-cols-2 gap-5">
          {currentExp.map((g) => (
            <div key={g.t} className="bg-white border border-pr-gray-light rounded-lg p-6">
              <h4 className="font-dm-serif text-lg text-pr-black mb-2">{g.t}</h4>
              <div className="h-px w-8 bg-pr-orange mb-4" />
              <ul className="space-y-2 text-sm text-pr-gray-dark">
                {g.l.map((q) => <li key={q}>— {q}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Réflexion */}
      <MethodSection label="Section 03" title="Questions de réflexion et projection" icon={MessageCircle}>
        <div className="grid md:grid-cols-3 gap-5">
          {reflection.map((g) => (
            <div key={g.t} className="bg-white border border-pr-gray-light rounded-lg p-6">
              <h4 className="font-dm-serif text-lg text-pr-black mb-2">{g.t}</h4>
              <div className="h-px w-8 bg-pr-orange mb-4" />
              <ul className="space-y-2 text-sm text-pr-gray-dark">
                {g.l.map((q) => <li key={q}>— {q}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Profils */}
      <MethodSection label="Section 04" title="Questions spécifiques selon le profil du juré" icon={Users}>
        <div className="grid md:grid-cols-3 gap-5">
          {profiles.map((g) => (
            <div key={g.t} className="bg-white border border-pr-gray-light border-l-4 border-l-pr-orange rounded-r-lg p-6">
              <h4 className="font-dm-serif text-lg text-pr-black mb-4">{g.t}</h4>
              <ul className="space-y-2 text-sm text-pr-gray-dark">
                {g.l.map((q) => <li key={q}>— {q}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </MethodSection>

      {/* Conseils */}
      <MethodSection label="Section 05" title="Conseils pour réussir l'entretien inversé" icon={CheckCircle}>
        <div className="space-y-4">
          {tips.map((tip, i) => (
            <div key={tip.t} className="bg-white border border-pr-gray-light rounded-lg p-6 flex items-start gap-5">
              <span className="font-dm-serif text-3xl text-pr-orange leading-none flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h4 className="font-dm-serif text-lg text-pr-black mb-2">{tip.t}</h4>
                <div className="h-px w-8 bg-pr-orange mb-3" />
                <p className="text-sm text-pr-gray-dark leading-relaxed">{tip.d}</p>
              </div>
            </div>
          ))}
        </div>
      </MethodSection>
    </MethodologyShell>
  );
};

export default EntretienInverseGEMPage;
