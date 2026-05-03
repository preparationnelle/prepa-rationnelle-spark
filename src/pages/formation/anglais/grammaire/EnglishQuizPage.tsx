import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathQuiz } from '@/components/quiz/MathQuiz';
import { useLocation } from 'react-router-dom';
import { englishGrammarQuizzes } from '@/data/englishGrammarQuizzesData';

const chapterMetadata: Record<string, { title: string; number: number; description: string }> = {
    'temps-verbaux': { title: "Temps Verbaux", number: 1, description: "Testez vos connaissances sur les temps verbaux" },
    'conditionnels': { title: "Conditionnels", number: 2, description: "Testez vos connaissances sur les conditionnels" },
    'voix-passives': { title: "Voix Passives", number: 3, description: "Testez vos connaissances sur la voix passive" },
    'discours-indirect': { title: "Discours Indirect", number: 4, description: "Testez vos connaissances sur le discours indirect" },
    'modaux': { title: "Modaux", number: 5, description: "Testez vos connaissances sur les modaux" },
    'prepositions': { title: "Prépositions", number: 6, description: "Testez vos connaissances sur les prépositions" },
    'articles': { title: "Articles", number: 7, description: "Testez vos connaissances sur les articles" },
    'relatives': { title: "Relatives", number: 8, description: "Testez vos connaissances sur les relatives" },
    'gerondif-infinitif': { title: "Gérondif et Infinitif", number: 9, description: "Testez vos connaissances sur le gérondif et l'infinitif" },
    'comparatifs': { title: "Comparatifs", number: 10, description: "Testez vos connaissances sur les comparatifs" },
    'questions': { title: "Questions", number: 11, description: "Testez vos connaissances sur les questions" },
    'expressions-temps': { title: "Expressions de Temps", number: 12, description: "Testez vos connaissances sur les expressions de temps" },
    'concordance': { title: "Concordance des Temps", number: 13, description: "Testez vos connaissances sur la concordance des temps" },
    'quantifieurs': { title: "Quantifieurs", number: 14, description: "Testez vos connaissances sur les quantifieurs" },
    'subjunctif': { title: "Subjunctif", number: 15, description: "Testez vos connaissances sur le subjunctif" },
    'inversions': { title: "Inversions", number: 16, description: "Testez vos connaissances sur les inversions" },
    'connecteurs': { title: "Connecteurs", number: 17, description: "Testez vos connaissances sur les connecteurs" },
    'verbes-irreguliers': { title: "Verbes Irréguliers", number: 18, description: "Testez vos connaissances sur les verbes irréguliers" },
    'causatives': { title: "Causatives", number: 19, description: "Testez vos connaissances sur les causatives" },
    'nuances-lexicales': { title: "Nuances Lexicales", number: 20, description: "Testez vos connaissances sur les nuances lexicales" },
};

const EnglishQuizPage = () => {
    const location = useLocation();
    // Extract slug from path: /formation/anglais/grammaire/:slug/quiz
    const pathParts = location.pathname.split('/');
    // Assuming path is always .../grammaire/SLUG/quiz
    // parts: ["", "formation", "anglais", "grammaire", "SLUG", "quiz"]
    const slug = pathParts[4];

    const metadata = chapterMetadata[slug] || { title: "Quiz", number: 0, description: "Quiz de grammaire" };
    const questions = englishGrammarQuizzes[slug] || [];

    return (
        <MathChapterTemplate
            chapterTitle={`Chapitre ${metadata.number} : ${metadata.title}`}
            description={metadata.description}
            chapterNumber={metadata.number}
            slug={slug}
            subject="anglais/grammaire"
            activeSection="quiz"
            showNavigation={true}
            coursePath={`/formation/anglais/grammaire/${slug}`}
            exercisesPath={`/formation/anglais/grammaire/${slug}/exercices`}
            quizPath={`/formation/anglais/grammaire/${slug}/quiz`}
            flashcardsPath={`/formation/anglais/grammaire/${slug}`} // Placeholder
        >
            <MathQuiz
                title={`Quiz - Chapitre ${metadata.number} : ${metadata.title}`}
                questions={questions}
                chapterNumber={metadata.number}
                chapterTitle={metadata.title}
            />
        </MathChapterTemplate>
    );
};

export default EnglishQuizPage;
