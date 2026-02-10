import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Play, Target, Brain, Code } from 'lucide-react';
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

    // Standard checks
    const hasCourse = allPaths.includes(coursePath);
    const hasExercises = allPaths.includes(exercisesPath);
    const hasFlashcards = true; // Always show flashcards button
    const hasQuiz = true; // Always show quiz button

    const resolvedCourseHref = hasCourse ? coursePath : (hasExercises ? exercisesPath : undefined);

    // If customLink is provided, we override standard behavior
    if (chapter.customLink) {
        return (
            <div
                onClick={() => navigate(chapter.customLink!)}
                className="block cursor-pointer"
            >
                <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border border-gray-100/50 hover:border-blue-100 group">
                    <div className="flex items-center gap-5">
                        <div className={`w-12 h-12 ${chapter.color.replace('bg-', 'bg-').replace('600', '50')} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 flex-shrink-0 border border-blue-50`}>
                            <span className={`font-bold text-lg ${chapter.color.replace('bg-', 'text-')}`}>{chapter.id}</span>
                        </div>
                        <div className="flex-1 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">{chapter.title}</h3>
                                <p className="text-sm text-gray-500 font-medium line-clamp-1">{chapter.description}</p>
                            </div>
                            <div className="flex gap-2 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                                <Link to={chapter.customLink!}>
                                    <Button size="sm" className={`${chapter.color} hover:opacity-90 text-white rounded-lg font-medium shadow-sm h-9 px-5`}>
                                        <BookOpen className="mr-2 h-4 w-4" />
                                        Accéder
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            onClick={() => resolvedCourseHref && navigate(resolvedCourseHref)}
            className="block cursor-pointer"
        >
            <div className="bg-white rounded-2xl p-4 md:p-5 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgb(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 border border-transparent hover:border-blue-100 group">
                <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 ${chapter.color.replace('bg-', 'bg-').replace('600', '50')} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 flex-shrink-0 border border-blue-50`}>
                        <span className={`font-bold text-lg ${chapter.color.replace('bg-', 'text-')}`}>{chapter.id}</span>
                    </div>
                    <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">{chapter.title}</h3>
                            <p className="text-sm text-gray-500 font-medium line-clamp-1">{chapter.description}</p>
                        </div>

                        <div className="flex gap-2 flex-wrap md:flex-nowrap flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                            {resolvedCourseHref && (
                                <Link to={resolvedCourseHref}>
                                    <Button size="sm" className={`${chapter.color} hover:opacity-90 text-white rounded-lg font-medium shadow-sm transition-all duration-200 h-9 px-4 text-xs`}>
                                        <BookOpen className="mr-2 h-3.5 w-3.5" />
                                        Cours
                                    </Button>
                                </Link>
                            )}

                            {hasExercises && (
                                <Link to={exercisesPath}>
                                    <Button size="sm" variant="outline" className="border-gray-200 text-gray-600 hover:bg-white hover:text-blue-700 hover:border-blue-200 rounded-lg transition-all duration-200 h-9 px-4 text-xs bg-transparent">
                                        <Play className="mr-2 h-3.5 w-3.5" />
                                        Exercices
                                    </Button>
                                </Link>
                            )}

                            {hasFlashcards && (
                                <Link to={flashcardsPath}>
                                    <Button size="sm" variant="outline" className="border-gray-200 text-gray-600 hover:bg-white hover:text-blue-700 hover:border-blue-200 rounded-lg transition-all duration-200 h-9 px-4 text-xs bg-transparent">
                                        <Brain className="mr-2 h-3.5 w-3.5" />
                                        Flashcards
                                    </Button>
                                </Link>
                            )}

                            {hasQuiz && (
                                <Link to={quizPath}>
                                    <Button size="sm" variant="outline" className="border-gray-200 text-gray-600 hover:bg-white hover:text-blue-700 hover:border-blue-200 rounded-lg transition-all duration-200 h-9 px-4 text-xs bg-transparent">
                                        <Target className="mr-2 h-3.5 w-3.5" />
                                        Quiz
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MathsChapterListRow;
