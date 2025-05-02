
import { motivationObjectivesQuestions } from './motivation_objectives';
import { interpersonalTeamworkQuestions } from './interpersonal_teamwork';
import { creativeUnexpectedQuestions } from './creative_unexpected';
import { projectionScenariosQuestions } from './projection_scenarios';

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
    "Qu'est-ce qui vous motive à vous lever chaque matin ?",
    'Quel impact souhaitez-vous avoir dans votre domaine ou votre environnement ?'
  ],
  interpersonal: [
    'Préférez-vous travailler seul ou en équipe ?',
    'Comment réagissez-vous face à une critique constructive ?',
    'Comment vous assurez-vous de la réussite de vos collègues ?',
    'Comment décririez-vous votre capacité à communiquer avec les autres ?',
    "Qu'apportez-vous à une équipe ?",
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
    "Quel dilemme moral avez-vous déjà rencontré, et comment l'avez-vous résolu ?",
    "Comment réagissez-vous face à l'injustice ou à l'échec ?",
    "Qu'est-ce qui vous rend heureux dans la vie ?"
  ],
  projection: [
    "Parlez-moi d'une expérience où vous avez dû relever un défi.",
    'Comment réagiriez-vous si vous deviez travailler sur un projet qui ne vous passionne pas ?',
    "Comment vous adaptez-vous à un environnement ou à une culture d'entreprise différente ?",
    'Décrivez une situation où vous avez dû prendre une décision difficile.',
    'Comment gérez-vous les imprévus ou les changements de dernière minute ?'
  ],
  // Nouvelles catégories
  'motivation-objectives': motivationObjectivesQuestions.map(q => q.text),
  'interpersonal-teamwork': interpersonalTeamworkQuestions.map(q => q.text),
  'creative-unexpected': creativeUnexpectedQuestions.map(q => q.text),
  'projection-scenarios': projectionScenariosQuestions.map(q => q.text)
};
