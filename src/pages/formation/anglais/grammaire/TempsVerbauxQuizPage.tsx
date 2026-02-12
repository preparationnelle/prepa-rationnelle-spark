import React from 'react';
import { useLocation } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathQuiz } from '@/components/quiz/MathQuiz';
import { tempsVerbauxQuizQuestions } from '@/data/englishGrammarQuizQuestions';

const TempsVerbauxQuizPage: React.FC = () => {
    return (
        <MathChapterTemplate
            chapterTitle="Chapitre 1 : Temps Verbaux"
            description="Testez vos connaissances sur les temps verbaux en anglais"
            chapterNumber={1}
            slug="temps-verbaux"
            subject="anglais/grammaire"
            activeSection="quiz"
            showNavigation={true}
            coursePath="/formation/anglais/grammaire/temps-verbaux"
            exercisesPath="/formation/anglais/grammaire/temps-verbaux/exercices"
            quizPath="/formation/anglais/grammaire/temps-verbaux/quiz"
            flashcardsPath="/formation/anglais/grammaire/temps-verbaux" // Placeholder until flashcards are available
        >
            <MathQuiz
                title="Quiz - Chapitre 1 : Temps Verbaux"
                questions={tempsVerbauxQuizQuestions}
                chapterNumber={1}
                chapterTitle="Temps Verbaux"
            />
        </MathChapterTemplate>
    );
};

export default TempsVerbauxQuizPage;
