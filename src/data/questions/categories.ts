
import { QuestionCategory } from './types';
import { introspectionQuestions } from './introspection';
import { motivationQuestions } from './motivation';
import { projectionQuestions } from './projection';
import { interpersonalQuestions } from './interpersonal';
import { creativeQuestions } from './creative';
import { valuesQuestions } from './values';
import { motivationObjectivesQuestions } from './motivation_objectives';
import { interpersonalTeamworkQuestions } from './interpersonal_teamwork';
import { creativeUnexpectedQuestions } from './creative_unexpected';
import { projectionScenariosQuestions } from './projection_scenarios';

export const questionCategories: QuestionCategory[] = [
  {
    id: 'introspection',
    title: 'Introspection',
    icon: 'user',
    description: 'Questions sur votre personnalité, vos forces et vos faiblesses',
    questions: introspectionQuestions
  },
  {
    id: 'motivation',
    title: 'Motivation',
    icon: 'rocket',
    description: 'Questions sur ce qui vous anime et votre projet professionnel',
    questions: motivationQuestions
  },
  {
    id: 'projection',
    title: 'Projection',
    icon: 'compass',
    description: 'Questions sur votre vision du futur et votre capacité d\'adaptation',
    questions: projectionQuestions
  },
  {
    id: 'interpersonal',
    title: 'Relations',
    icon: 'users',
    description: 'Questions sur vos interactions avec les autres',
    questions: interpersonalQuestions
  },
  {
    id: 'creative',
    title: 'Créativité',
    icon: 'lightbulb',
    description: 'Questions qui sortent des sentiers battus pour tester votre originalité',
    questions: creativeQuestions
  },
  {
    id: 'values',
    title: 'Valeurs',
    icon: 'heart',
    description: 'Questions sur ce qui est important pour vous',
    questions: valuesQuestions
  },
  {
    id: 'motivation-objectives',
    title: 'Motivations & objectifs',
    icon: 'target',
    description: 'Questions approfondies sur vos motivations et vos objectifs professionnels',
    questions: motivationObjectivesQuestions
  },
  {
    id: 'interpersonal-teamwork',
    title: 'Relations & travail d\'équipe',
    icon: 'users-round',
    description: 'Questions sur votre approche du travail collaboratif et des relations interpersonnelles',
    questions: interpersonalTeamworkQuestions
  },
  {
    id: 'creative-unexpected',
    title: 'Questions créatives & inattendues',
    icon: 'sparkles',
    description: 'Questions originales pour tester votre créativité et votre capacité d\'adaptation',
    questions: creativeUnexpectedQuestions
  },
  {
    id: 'projection-scenarios',
    title: 'Projection & mises en situation',
    icon: 'map',
    description: 'Scénarios professionnels concrets pour évaluer votre approche face à des situations complexes',
    questions: projectionScenariosQuestions
  }
];
