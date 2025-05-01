
export type QuestionCategory = {
  id: string;
  title: string;
  icon: string;
  description: string;
  questions: Question[];
};

export type Question = {
  id: string;
  text: string;
  exampleAnswer: string;
  tips: string;
};
