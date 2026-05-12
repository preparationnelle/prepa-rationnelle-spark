export type QA = {
  id: number;
  question: string;
  hint: string;
  jury: string;
  structure: string[];
  ancrage: string;
  phrasesCles: string[];
};

export type BanqueCategory = {
  id: string;
  label: string;
  tag: string;
  questions: QA[];
};
