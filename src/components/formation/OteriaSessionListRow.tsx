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

    const mainHref = session.customLink || session.courseLink || session.exercisesLink;

    return (
        <div
            onClick={() => mainHref && navigate(mainHref)}
            className="block cursor-pointer"
        >
            <div className="carnet-card group p-5 sm:p-6 hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow">
                <div className="flex items-start sm:items-center gap-5">
                    {/* Numéro façon cahier */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                        <span className="carnet-hand text-[40px] sm:text-[48px] text-carnet-red leading-none font-semibold">
                            {String(session.id).padStart(2, '0')}
                        </span>
                        <hr className="w-8 h-0.5 bg-carnet-ink border-0 mt-1" />
                    </div>

                    {/* Icône */}
                    <div className="hidden sm:flex w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] items-center justify-center flex-shrink-0">
                        {session.icon ? (
                            <session.icon className="h-5 w-5 text-carnet-red" />
                        ) : (
                            <span className="text-base font-bold text-carnet-red">{session.id}</span>
                        )}
                    </div>

                    <div className="flex-1 flex flex-col lg:flex-row lg:items-center justify-between gap-4 min-w-0">
                        <div className="min-w-0">
                            <div className="carnet-eyebrow text-[11px] mb-1.5">
                                Séance {session.id}
                            </div>
                            <h3 className="font-lora text-[20px] sm:text-[22px] leading-[1.25] text-carnet-ink mb-1 group-hover:text-carnet-red transition-colors">
                                {session.title}
                            </h3>
                            <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.55] line-clamp-2">
                                {session.content}
                            </p>
                        </div>

                        {/* Actions */}
                        <div
                            className="flex flex-wrap gap-2 lg:flex-nowrap flex-shrink-0"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {session.hasMiniProjet && (
                                <Link to="/formation/oteria/mini-projet">
                                    <Button
                                        size="sm"
                                        className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-9 px-4 text-xs border-0"
                                    >
                                        <Code className="mr-2 h-3.5 w-3.5" />
                                        Ateliers
                                    </Button>
                                </Link>
                            )}

                            {session.customLink && session.customButtonText && (
                                <Link to={session.customLink}>
                                    <Button
                                        size="sm"
                                        className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-9 px-4 text-xs border-0"
                                    >
                                        {session.customIcon ? <session.customIcon className="mr-2 h-3.5 w-3.5" /> : <Target className="mr-2 h-3.5 w-3.5" />}
                                        {session.customButtonText}
                                    </Button>
                                </Link>
                            )}

                            {session.hasCourse && session.courseLink && (
                                <Link to={session.courseLink}>
                                    <Button
                                        size="sm"
                                        className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-9 px-4 text-xs border-0"
                                    >
                                        <BookOpen className="mr-2 h-3.5 w-3.5" />
                                        Cours
                                    </Button>
                                </Link>
                            )}

                            {session.hasExercises && session.exercisesLink && (
                                <Link to={session.exercisesLink}>
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

                            {session.hasFlashcards && session.flashcardsLink && (
                                <Link to={session.flashcardsLink}>
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

                            {session.hasQuiz && session.qcmLink && (
                                <Link to={session.qcmLink}>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument rounded-full h-9 px-4 text-xs bg-transparent"
                                    >
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
