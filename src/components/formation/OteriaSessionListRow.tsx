import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Play, Target, Brain, Code } from 'lucide-react';

interface OteriaSession {
    id: number;
    title: string;
    content: string; // description
    icon: any; // Lucide icon
    color: string;

    // Explicit links (optional, if standard slug pattern doesn't apply)
    courseLink?: string;
    exercisesLink?: string;
    flashcardsLink?: string;
    qcmLink?: string;

    // Feature flags
    hasCourse: boolean;
    hasExercises: boolean;
    hasQuiz: boolean;
    hasFlashcards: boolean;
    hasMiniProjet?: boolean;

    // Custom actions for special sessions
    customLink?: string;
    customButtonText?: string;
    customIcon?: any; // To override the default icon logic if needed
}

interface OteriaSessionListRowProps {
    session: OteriaSession;
}

const OteriaSessionListRow: React.FC<OteriaSessionListRowProps> = ({ session }) => {
    const navigate = useNavigate();

    // Determine primary link for row click
    // Priority: Custom Link -> Course Link -> Exercises Link -> ...
    const mainHref = session.customLink || session.courseLink || session.exercisesLink;

    // Render logic
    return (
        <div
            onClick={() => mainHref && navigate(mainHref)}
            className="block cursor-pointer"
        >
            <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md hover:scale-[1.005] transition-all duration-200 border border-slate-100 hover:border-teal-200 group">
                <div className="flex items-center gap-5">
                    {/* Icon / Number Circle */}
                    <div className={`w-12 h-12 ${session.color.replace('bg-', 'bg-').replace('600', '100')} rounded-full flex items-center justify-center group-hover:bg-opacity-80 transition-colors flex-shrink-0 border border-teal-50`}>
                        {session.icon ? (
                            <session.icon className={`h-6 w-6 ${session.color.replace('bg-', 'text-')}`} />
                        ) : (
                            <span className={`text-lg font-bold ${session.color.replace('bg-', 'text-')}`}>{session.id}</span>
                        )}
                    </div>

                    <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-100">
                                    Séance {session.id}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">
                                {session.title}
                            </h3>
                            <p className="text-sm text-slate-500 line-clamp-2 md:line-clamp-1">{session.content}</p>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 flex-wrap md:flex-nowrap flex-shrink-0" onClick={(e) => e.stopPropagation()}>

                            {/* Special Mini Projet / Evaluation Case */}
                            {session.hasMiniProjet && (
                                <Link to="/formation/oteria/mini-projet">
                                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white rounded-md font-medium shadow-sm h-8 px-3 text-xs">
                                        <Code className="mr-2 h-3.5 w-3.5" />
                                        Ateliers
                                    </Button>
                                </Link>
                            )}

                            {session.customLink && session.customButtonText && (
                                <Link to={session.customLink}>
                                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white rounded-md font-medium shadow-sm h-8 px-3 text-xs">
                                        {session.customIcon ? <session.customIcon className="mr-2 h-3.5 w-3.5" /> : <Target className="mr-2 h-3.5 w-3.5" />}
                                        {session.customButtonText}
                                    </Button>
                                </Link>
                            )}


                            {/* Standard Buttons */}
                            {session.hasCourse && session.courseLink && (
                                <Link to={session.courseLink}>
                                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white rounded-md font-medium shadow-sm transition-all duration-200 h-8 px-3 text-xs">
                                        <BookOpen className="mr-2 h-3.5 w-3.5" />
                                        Cours
                                    </Button>
                                </Link>
                            )}

                            {session.hasExercises && session.exercisesLink && (
                                <Link to={session.exercisesLink}>
                                    <Button size="sm" variant="outline" className="border-slate-200 text-slate-600 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200 rounded-md transition-all duration-200 h-8 px-3 text-xs">
                                        <Play className="mr-2 h-3.5 w-3.5" />
                                        Exercices
                                    </Button>
                                </Link>
                            )}

                            {session.hasFlashcards && session.flashcardsLink && (
                                <Link to={session.flashcardsLink}>
                                    <Button size="sm" variant="outline" className="border-slate-200 text-slate-600 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200 rounded-md transition-all duration-200 h-8 px-3 text-xs">
                                        <Brain className="mr-2 h-3.5 w-3.5" />
                                        Flashcards
                                    </Button>
                                </Link>
                            )}

                            {session.hasQuiz && session.qcmLink && (
                                <Link to={session.qcmLink}>
                                    <Button size="sm" variant="outline" className="border-slate-200 text-slate-600 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200 rounded-md transition-all duration-200 h-8 px-3 text-xs">
                                        <Target className="mr-2 h-3.5 w-3.5" />
                                        QCM
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

export default OteriaSessionListRow;
