import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Play, Target, Brain } from 'lucide-react';
import { getAllRoutePaths } from '@/config/routes';

interface Chapter {
    id: number | string;
    slug: string;
    title: string;
    description?: string;
    icon: any;
    color: string;
    symbol: string;
    customLink?: string;
}

interface MathsChapterListRowProps {
    chapter: Chapter;
}

const MathsChapterListRow: React.FC<MathsChapterListRowProps> = ({ chapter }) => {
    const navigate = useNavigate();
    const allPaths = getAllRoutePaths();

    const coursePath = `/formation/maths-${chapter.slug}`;
    const exercisesPath = `/formation/maths-${chapter.slug}-exercices`;
    const flashcardsPath = `/formation/maths-${chapter.slug}-flashcards`;
    const quizPath = `/formation/maths-${chapter.slug}-quiz`;

    const hasCourse = allPaths.includes(coursePath);
    const hasExercises = allPaths.includes(exercisesPath);
    const hasFlashcards = true;
    const hasQuiz = true;

    const resolvedCourseHref = hasCourse ? coursePath : (hasExercises ? exercisesPath : undefined);
    const ChapterIcon = chapter.icon;

    if (chapter.customLink) {
        return (
            <div
                onClick={() => navigate(chapter.customLink!)}
                className="carnet-card group cursor-pointer p-5 hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow"
            >
                <div className="flex items-center gap-5">
                    <div className="flex-shrink-0 flex flex-col items-center">
                        <span className="carnet-hand text-[36px] text-carnet-red leading-none font-semibold">
                            {String(chapter.id).padStart(2, '0')}
                        </span>
                        <hr className="w-7 h-0.5 bg-carnet-ink border-0 mt-1" />
                    </div>

                    {ChapterIcon && (
                        <div className="hidden sm:flex w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] items-center justify-center flex-shrink-0">
                            <ChapterIcon className="h-5 w-5 text-carnet-red" />
                        </div>
                    )}

                    <div className="flex-1 flex flex-col lg:flex-row lg:items-center justify-between gap-4 min-w-0">
                        <div className="min-w-0">
                            <h3 className="font-lora text-[19px] sm:text-[20px] leading-[1.25] text-carnet-ink mb-1 group-hover:text-carnet-red transition-colors">
                                {chapter.title}
                            </h3>
                            <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] line-clamp-1">
                                {chapter.description}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                            <Link to={chapter.customLink!}>
                                <Button
                                    size="sm"
                                    className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-9 px-4 text-xs border-0"
                                >
                                    <BookOpen className="mr-2 h-3.5 w-3.5" />
                                    Accéder
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            onClick={() => resolvedCourseHref && navigate(resolvedCourseHref)}
            className="carnet-card group cursor-pointer p-5 sm:p-6 hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow"
        >
            <div className="flex items-start sm:items-center gap-5">
                <div className="flex-shrink-0 flex flex-col items-center">
                    <span className="carnet-hand text-[36px] sm:text-[40px] text-carnet-red leading-none font-semibold">
                        {String(chapter.id).padStart(2, '0')}
                    </span>
                    <hr className="w-7 h-0.5 bg-carnet-ink border-0 mt-1" />
                </div>

                {ChapterIcon && (
                    <div className="hidden sm:flex w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] items-center justify-center flex-shrink-0">
                        <ChapterIcon className="h-5 w-5 text-carnet-red" />
                    </div>
                )}

                <div className="flex-1 flex flex-col lg:flex-row lg:items-center justify-between gap-4 min-w-0">
                    <div className="min-w-0">
                        <h3 className="font-lora text-[19px] sm:text-[20px] leading-[1.25] text-carnet-ink mb-1 group-hover:text-carnet-red transition-colors">
                            {chapter.title}
                        </h3>
                        <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] line-clamp-2">
                            {chapter.description}
                        </p>
                    </div>

                    <div
                        className="flex flex-wrap gap-2 lg:flex-nowrap flex-shrink-0"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {resolvedCourseHref && (
                            <Link to={resolvedCourseHref}>
                                <Button
                                    size="sm"
                                    className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-9 px-4 text-xs border-0"
                                >
                                    <BookOpen className="mr-2 h-3.5 w-3.5" />
                                    Cours
                                </Button>
                            </Link>
                        )}

                        {hasExercises && (
                            <Link to={exercisesPath}>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument rounded-full h-9 px-4 text-xs bg-transparent"
                                >
                                    <Play className="mr-2 h-3.5 w-3.5" />
                                    Exercices
                                </Button>
                            </Link>
                        )}

                        {hasFlashcards && (
                            <Link to={flashcardsPath}>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument rounded-full h-9 px-4 text-xs bg-transparent"
                                >
                                    <Brain className="mr-2 h-3.5 w-3.5" />
                                    Flashcards
                                </Button>
                            </Link>
                        )}

                        {hasQuiz && (
                            <Link to={quizPath}>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument rounded-full h-9 px-4 text-xs bg-transparent"
                                >
                                    <Target className="mr-2 h-3.5 w-3.5" />
                                    Quiz
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MathsChapterListRow;
