import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { PythonModuleQuiz } from '@/components/python/PythonModuleQuiz';
import { fundamentalsQuizQuestions } from '@/data/pythonQuizQuestions';

const PythonQuizPage: React.FC = () => {
  return (
    <MathChapterTemplate
      chapterNumber={0}
      chapterTitle="Quiz Python"
      description="Quiz interactif sur les fondamentaux Python"
    >
      <PythonModuleQuiz title="Quiz Python — Fondamentaux" questions={fundamentalsQuizQuestions} />
    </MathChapterTemplate>
  );
};

export default PythonQuizPage;