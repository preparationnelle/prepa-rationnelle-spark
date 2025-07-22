
import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Chapitre2Content } from '@/components/formation/chapitres/Chapitre2Content';

const MathsEnsemblesPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={2}
      chapterTitle="Ensembles et applications"
      description="Théorie des ensembles, relations, applications et bijections"
    >
      <Chapitre2Content />
    </MathChapterTemplate>
  );
};

export default MathsEnsemblesPage;
