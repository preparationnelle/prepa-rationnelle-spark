import React from 'react';
import ChapterPageTemplate from '@/components/maths-appliquees/ChapterPageTemplate';
import { MATHS_APPLIQUEES_PATHS } from '@/types/maths-appliquees';

const Chapitre19EquationsDifferentiellesCoursPage = () => {
  return (
    <ChapterPageTemplate
      title="Équations différentielles avec applications concrètes"
      chapterNumber={19}
      type="Cours"
      backToMain={MATHS_APPLIQUEES_PATHS.main}
      nextPages={{
        exercices: "/formation/maths-equations-differentielles-applications-concretes-exercices",
        quiz: "/formation/maths-equations-differentielles-applications-concretes-quiz"
      }}
    />
  );
};

export default Chapitre19EquationsDifferentiellesCoursPage;
