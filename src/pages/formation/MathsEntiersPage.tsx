
import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Chapitre3Content } from '@/components/formation/chapitres/Chapitre3Content';

const MathsEntiersPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={3}
      chapterTitle="Entiers"
      description="Arithmétique et structures algébriques"
    >
      <Chapitre3Content />
    </MathChapterTemplate>
  );
};

export default MathsEntiersPage;
