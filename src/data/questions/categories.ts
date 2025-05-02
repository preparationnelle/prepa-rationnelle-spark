
import { QuestionCategory } from './types';
import { introspectionQuestions } from './introspection';
import { valuesQuestions } from './values';
import { motivationQuestions } from './motivation';
import { motivationObjectivesQuestions } from './motivation_objectives';
import { interpersonalQuestions } from './interpersonal';
import { interpersonalTeamworkQuestions } from './interpersonal_teamwork';
import { creativeQuestions } from './creative';
import { creativeUnexpectedQuestions } from './creative_unexpected';
import { projectionQuestions } from './projection';
import { projectionScenariosQuestions } from './projection_scenarios';

// Fonction pour combiner les questions de deux catégories
const combineQuestions = (questions1: any[], questions2: any[]) => {
  // Utiliser un Set pour éviter les doublons basés sur l'ID
  const combinedQuestionsMap = new Map();
  
  // Ajouter les questions de la première catégorie
  questions1.forEach(q => {
    combinedQuestionsMap.set(q.id, q);
  });
  
  // Ajouter les questions de la seconde catégorie
  questions2.forEach(q => {
    // Si l'ID n'existe pas déjà, ajouter la question
    if (!combinedQuestionsMap.has(q.id)) {
      combinedQuestionsMap.set(q.id, q);
    }
  });
  
  // Convertir la Map en tableau
  return Array.from(combinedQuestionsMap.values());
};

// Combiner les questions des catégories qui se chevauchent
const combinedMotivationQuestions = combineQuestions(motivationQuestions, motivationObjectivesQuestions);
const combinedInterpersonalQuestions = combineQuestions(interpersonalQuestions, interpersonalTeamworkQuestions);
const combinedCreativeQuestions = combineQuestions(creativeQuestions, creativeUnexpectedQuestions);
const combinedProjectionQuestions = combineQuestions(projectionQuestions, projectionScenariosQuestions);

export const questionCategories: QuestionCategory[] = [
  {
    id: 'introspection',
    title: 'Introspection',
    icon: 'user',
    description: 'Questions sur votre personnalité, vos forces et vos faiblesses',
    questions: introspectionQuestions
  },
  {
    id: 'motivation-objectives',
    title: 'Motivations & objectifs',
    icon: 'target',
    description: 'Questions approfondies sur vos ambitions, ce qui vous anime et votre projet professionnel',
    questions: combinedMotivationQuestions
  },
  {
    id: 'interpersonal-teamwork',
    title: 'Relations & travail d\'équipe',
    icon: 'users-round',
    description: 'Questions sur votre approche du travail collaboratif et des relations interpersonnelles',
    questions: combinedInterpersonalQuestions
  },
  {
    id: 'creative-unexpected',
    title: 'Questions créatives & inattendues',
    icon: 'sparkles',
    description: 'Questions originales pour tester votre créativité et votre capacité d\'adaptation',
    questions: combinedCreativeQuestions
  },
  {
    id: 'projection-scenarios',
    title: 'Projection & mises en situation',
    icon: 'map',
    description: 'Scénarios professionnels concrets et questions sur votre vision du futur',
    questions: combinedProjectionQuestions
  },
  {
    id: 'values',
    title: 'Valeurs',
    icon: 'heart',
    description: 'Questions sur ce qui est important pour vous',
    questions: valuesQuestions
  }
];
