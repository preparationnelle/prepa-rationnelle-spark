
import { QuestionCategory } from './types';
import { introspectionQuestions } from './introspection';
import { motivationQuestions } from './motivation';
import { interpersonalQuestions } from './interpersonal';
import { creativeQuestions } from './creative';
import { valuesQuestions } from './values';
import { projectionQuestions } from './projection';

export const questionCategories: QuestionCategory[] = [
  {
    id: "introspection",
    title: "Questions d'introspection et de connaissance de soi",
    icon: "brain",
    description: "Ces questions visent à évaluer votre capacité à vous auto-évaluer et à vous connaître.",
    questions: introspectionQuestions
  },
  {
    id: "motivation",
    title: "Questions sur les motivations et les objectifs",
    icon: "target",
    description: "Ces questions évaluent votre projet professionnel et vos ambitions.",
    questions: motivationQuestions
  },
  {
    id: "interpersonal",
    title: "Questions sur les relations interpersonnelles et le travail en équipe",
    icon: "users",
    description: "Ces questions évaluent votre capacité à travailler avec les autres et à communiquer efficacement.",
    questions: interpersonalQuestions
  },
  {
    id: "creative",
    title: "Questions créatives et inattendues",
    icon: "puzzle",
    description: "Ces questions évaluent votre créativité, votre spontanéité et votre capacité à penser différemment.",
    questions: creativeQuestions
  },
  {
    id: "values",
    title: "Questions sur les valeurs et les choix personnels",
    icon: "values",
    description: "Ces questions évaluent vos principes éthiques et votre processus de prise de décision.",
    questions: valuesQuestions
  },
  {
    id: "projection",
    title: "Questions de projection et de mise en situation",
    icon: "search",
    description: "Ces questions évaluent votre capacité à vous adapter et à résoudre des problèmes concrets.",
    questions: projectionQuestions
  }
];
