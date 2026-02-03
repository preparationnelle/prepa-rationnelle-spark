import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Play, Target, Brain, Code } from 'lucide-react';
import { getAllRoutePaths } from '@/config/routes';

interface Chapter {
    id: number | string;
    slug: string;
    title: string;
    description: string;
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
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md hover:scale-[1.005] transition-all duration-200 border border-transparent hover:border-blue-200 group">
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${chapter.color.replace('bg-', 'bg-').replace('600', '100')} rounded-full flex items-center justify-center group-hover:bg-opacity-80 transition-colors flex-shrink-0`}>
                            <span className={`font-bold text-lg ${chapter.color.replace('bg-', 'text-')}`}>{chapter.id}</span>
                        </div>
                        <div className="flex-1 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{chapter.title}</h3>
                                <p className="text-sm text-gray-600 line-clamp-1">{chapter.description}</p>
                            </div>
                            <div className="flex gap-2 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                                <Link to={chapter.customLink!}>
                                    <Button size="sm" className={`${chapter.color} hover:opacity-90 text-white rounded-full font-medium shadow-sm h-8 px-4`}>
                                        <BookOpen className="mr-2 h-3.5 w-3.5" />
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
            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md hover:scale-[1.005] transition-all duration-200 border border-transparent hover:border-blue-200 group">
                <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${chapter.color.replace('bg-', 'bg-').replace('600', '50')} rounded-full flex items-center justify-center group-hover:bg-opacity-80 transition-colors flex-shrink-0 border border-blue-100`}>
                        <span className={`font-bold text-lg ${chapter.color.replace('bg-', 'text-')}`}>{chapter.id}</span>
                    </div>
                    <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{chapter.title}</h3>
                            <p className="text-sm text-gray-600 line-clamp-1">{chapter.description}</p>
                        </div>

                        <div className="flex gap-2 flex-wrap md:flex-nowrap flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                            {resolvedCourseHref && (
                                <Link to={resolvedCourseHref}>
                                    <Button size="sm" className={`${chapter.color} hover:opacity-90 text-white rounded-md font-medium shadow-sm transition-all duration-200 h-8 px-3 text-xs`}>
                                        <BookOpen className="mr-2 h-3.5 w-3.5" />
                                        Cours
                                    </Button>
                                </Link>
                            )}

                            {hasExercises && (
                                <Link to={exercisesPath}>
                                    <Button size="sm" variant="outline" className="border-gray-200 text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 rounded-md transition-all duration-200 h-8 px-3 text-xs">
                                        <Play className="mr-2 h-3.5 w-3.5" />
                                        Exercices
                                    </Button>
                                </Link>
                            )}

                            {hasFlashcards && (
                                <Link to={flashcardsPath}>
                                    <Button size="sm" variant="outline" className="border-gray-200 text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 rounded-md transition-all duration-200 h-8 px-3 text-xs">
                                        <Brain className="mr-2 h-3.5 w-3.5" />
                                        Flashcards
                                    </Button>
                                </Link>
                            )}

                            {hasQuiz && (
                                <Link to={quizPath}>
                                    <Button size="sm" variant="outline" className="border-gray-200 text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 rounded-md transition-all duration-200 h-8 px-3 text-xs">
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
