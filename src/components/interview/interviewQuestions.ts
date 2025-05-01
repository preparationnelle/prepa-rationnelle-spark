
export interface InterviewQuestion {
  id: string;
  text: string;
  optional?: boolean;
}

export interface InterviewBlock {
  id: string;
  title: string;
  questions: InterviewQuestion[];
}

export const INTERVIEW_QUESTIONS: InterviewBlock[] = [
  {
    id: 'presentation',
    title: 'Présentation & parcours',
    questions: [
      {
        id: 'intro',
        text: 'Peux-tu te présenter en deux minutes ?'
      },
      {
        id: 'accomplishment',
        text: 'Quel est, à ce jour, ton plus grand accomplissement académique ?'
      },
      {
        id: 'skill',
        text: 'Quelle compétence non technique as-tu le plus améliorée cette année, et comment ?',
        optional: true
      },
      {
        id: 'adjectives',
        text: 'Si tes proches devaient te décrire en trois adjectifs, lesquels seraient-ils ?',
        optional: true
      }
    ]
  },
  {
    id: 'motivation',
    title: 'Motivation & projet',
    questions: [
      {
        id: 'why-field',
        text: 'Pourquoi as-tu choisi cette filière / ce métier ?'
      },
      {
        id: 'expectations',
        text: 'Qu'attends-tu de cette formation/entreprise sur le plan personnel ?'
      },
      {
        id: 'value',
        text: 'Quelle est la valeur la plus importante pour toi au travail, et pourquoi ?',
        optional: true
      },
      {
        id: 'feedback-change',
        text: 'Raconte un moment où tu as changé d'avis après avoir reçu un feedback constructif.',
        optional: true
      }
    ]
  },
  {
    id: 'soft-skills',
    title: 'Soft skills & équipe',
    questions: [
      {
        id: 'collaboration',
        text: 'Donne un exemple concret de collaboration réussie.'
      },
      {
        id: 'conflict',
        text: 'Comment réagis-tu aux conflits au sein d'un groupe ?'
      },
      {
        id: 'motivation',
        text: 'Quelle stratégie utilises-tu pour rester motivé·e face à un objectif lointain ?',
        optional: true
      },
      {
        id: 'team-difficulty',
        text: 'Quelle est la chose la plus difficile que tu aies apprise à faire en équipe ?',
        optional: true
      }
    ]
  },
  {
    id: 'stress',
    title: 'Gestion du stress',
    questions: [
      {
        id: 'stressful-situation',
        text: 'Décris une situation stressante récente et ta méthode pour la gérer.'
      },
      {
        id: 'daily-ritual',
        text: 'As-tu un rituel quotidien pour maintenir ton équilibre personnel ?',
        optional: true
      },
      {
        id: 'urgency-importance',
        text: 'Comment différencies-tu urgence et importance dans tes tâches ?',
        optional: true
      }
    ]
  },
  {
    id: 'projection',
    title: 'Projection & valeurs',
    questions: [
      {
        id: 'five-years',
        text: 'Où te vois-tu dans cinq ans ?'
      },
      {
        id: 'social-cause',
        text: 'Quelle cause ou action sociétale aimerais-tu soutenir ?'
      },
      {
        id: 'new-skill',
        text: 'Si tu pouvais développer une seule nouvelle compétence cette année, laquelle choisirais-tu et pourquoi ?',
        optional: true
      },
      {
        id: 'quote',
        text: 'Quelle citation t'inspire le plus et comment se reflète-t-elle dans tes actions ?',
        optional: true
      }
    ]
  }
];

// Ajoutons aussi les questions supplémentaires du système, regroupées par catégorie
export const ADDITIONAL_QUESTIONS = {
  introspection: [
    'Comment décririez-vous votre personnalité en trois mots ?',
    'Quelles sont vos principales qualités et vos principaux défauts ?',
    'Quelle est votre plus grande force ?',
    'Quelle est votre plus grande faiblesse ?',
    'De quoi êtes-vous le plus fier dans votre parcours ?',
    'Quel échec vous a le plus appris ?',
    'Comment gérez-vous le stress ou les situations de conflit ?',
    'Quel animal vous représente le mieux, et pourquoi ?',
    'Quel est votre moteur au quotidien ?'
  ],
  motivation: [
    'Pourquoi avez-vous choisi cette voie ou ce projet ?',
    'Quelles sont vos aspirations professionnelles à court, moyen et long terme ?',
    'Où vous voyez-vous dans 5 ou 10 ans ?',
    'Quelles sont les personnes qui vous inspirent, et pourquoi ?',
    'Qu'est-ce qui vous motive à vous lever chaque matin ?',
    'Quel impact souhaitez-vous avoir dans votre domaine ou votre environnement ?'
  ],
  interpersonal: [
    'Préférez-vous travailler seul ou en équipe ?',
    'Comment réagissez-vous face à une critique constructive ?',
    'Comment vous assurez-vous de la réussite de vos collègues ?',
    'Comment décririez-vous votre capacité à communiquer avec les autres ?',
    'Qu'apportez-vous à une équipe ?',
    'Comment gérez-vous les conflits ou les tensions ?'
  ],
  creative: [
    'Si vous aviez une baguette magique, que feriez-vous ?',
    'Associez un animal à chaque membre de votre famille ou de votre équipe.',
    'Faites-nous rire avec une anecdote personnelle.',
    'Quel superpouvoir aimeriez-vous avoir, et pourquoi ?',
    'Si vous étiez un objet, lequel seriez-vous ?'
  ],
  values: [
    'Quelles sont les valeurs qui vous tiennent le plus à cœur ?',
    'Comment prenez-vous des décisions importantes ?',
    'Quel dilemme moral avez-vous déjà rencontré, et comment l'avez-vous résolu ?',
    'Comment réagissez-vous face à l'injustice ou à l'échec ?',
    'Qu'est-ce qui vous rend heureux dans la vie ?'
  ],
  projection: [
    'Parlez-moi d'une expérience où vous avez dû relever un défi.',
    'Comment réagiriez-vous si vous deviez travailler sur un projet qui ne vous passionne pas ?',
    'Comment vous adaptez-vous à un environnement ou à une culture d'entreprise différente ?',
    'Décrivez une situation où vous avez dû prendre une décision difficile.',
    'Comment gérez-vous les imprévus ou les changements de dernière minute ?'
  ]
};
