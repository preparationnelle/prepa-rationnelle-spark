import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Play, Brain, Target, Lightbulb, type LucideIcon } from 'lucide-react';
import { getAllRoutePaths } from '@/config/routes';

export interface ActionLink {
    label: string;
    icon?: LucideIcon;
    to: string;
    kind?: 'primary' | 'outline';
}

export interface FormationChapterListRowProps {
    number: number | string;
    title: string;
    description?: string;
    Icon?: LucideIcon;
    actions: ActionLink[];
    href?: string;
}

const FormationChapterListRow: React.FC<FormationChapterListRowProps> = ({
    number,
    title,
    description,
    Icon,
    actions,
    href,
}) => {
    const navigate = useNavigate();
    const rowHref = href ?? actions.find(a => a.kind === 'primary')?.to ?? actions[0]?.to;
    const formattedNumber = typeof number === 'number' ? String(number).padStart(2, '0') : number;

    return (
        <div
            onClick={() => rowHref && navigate(rowHref)}
            className="carnet-card group cursor-pointer p-5 sm:p-6 hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow"
        >
            <div className="flex items-start sm:items-center gap-5">
                <div className="flex-shrink-0 flex flex-col items-center">
                    <span className="carnet-hand text-[36px] sm:text-[40px] text-carnet-red leading-none font-semibold">
                        {formattedNumber}
                    </span>
                    <hr className="w-7 h-0.5 bg-carnet-ink border-0 mt-1" />
                </div>

                {Icon && (
                    <div className="hidden sm:flex w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-carnet-red" />
                    </div>
                )}

                <div className="flex-1 flex flex-col lg:flex-row lg:items-center justify-between gap-4 min-w-0">
                    <div className="min-w-0">
                        <h3 className="font-lora text-[19px] sm:text-[20px] leading-[1.25] text-carnet-ink mb-1 group-hover:text-carnet-red transition-colors">
                            {title}
                        </h3>
                        {description && (
                            <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] line-clamp-2">
                                {description}
                            </p>
                        )}
                    </div>

                    <div
                        className="flex flex-wrap gap-2 flex-shrink-0"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {actions.map((action, idx) => {
                            const ActionIcon = action.icon;
                            const isPrimary = action.kind === 'primary';
                            const className = isPrimary
                                ? 'bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-9 px-4 text-xs border-0'
                                : 'border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument rounded-full h-9 px-4 text-xs bg-transparent';
                            return (
                                <Link key={`${action.to}-${idx}`} to={action.to}>
                                    <Button
                                        size="sm"
                                        variant={isPrimary ? 'default' : 'outline'}
                                        className={className}
                                    >
                                        {ActionIcon && <ActionIcon className="mr-2 h-3.5 w-3.5" />}
                                        {action.label}
                                    </Button>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormationChapterListRow;

export function buildMathChapterActions(slug: string, customLink?: string): ActionLink[] {
    if (customLink) {
        return [{ label: 'Accéder', icon: BookOpen, to: customLink, kind: 'primary' }];
    }
    const allPaths = getAllRoutePaths();
    const coursePath = `/formation/maths-${slug}`;
    const exercisesPath = `/formation/maths-${slug}-exercices`;
    const flashcardsPath = `/formation/maths-${slug}-flashcards`;
    const quizPath = `/formation/maths-${slug}-quiz`;
    const methodesPath = `/formation/maths-${slug}-methodes`;

    const hasCourse = allPaths.includes(coursePath);
    const hasExercises = allPaths.includes(exercisesPath);
    const hasMethodes = allPaths.includes(methodesPath);
    const resolvedCourseHref = hasCourse ? coursePath : (hasExercises ? exercisesPath : undefined);

    const actions: ActionLink[] = [];
    if (resolvedCourseHref) {
        actions.push({ label: 'Cours', icon: BookOpen, to: resolvedCourseHref, kind: 'primary' });
    }
    if (hasExercises) {
        actions.push({ label: 'Exercices', icon: Play, to: exercisesPath });
    }
    actions.push({ label: 'Flashcards', icon: Brain, to: flashcardsPath });
    actions.push({ label: 'Quiz', icon: Target, to: quizPath });
    if (hasMethodes) {
        actions.push({ label: 'Méthodes', icon: Lightbulb, to: methodesPath });
    }
    return actions;
}

export function buildGeopoModuleActions(slug: string, customLink?: string): ActionLink[] {
    if (customLink) {
        return [{ label: 'Accéder', icon: BookOpen, to: customLink, kind: 'primary' }];
    }
    const base = `/formation/geopolitique/premiere-annee/${slug}`;
    return [
        { label: 'Cours', icon: BookOpen, to: base, kind: 'primary' },
        { label: 'Chronologie', icon: Target, to: `${base}/chronologie` },
        { label: 'Flashcards', icon: Brain, to: `${base}/flashcards` },
    ];
}

export type GeopoRegionActionKey = 'hub' | 'chronologie' | 'flashcards' | 'sujets' | 'auteurs';

export function buildGeopoRegionActions(
    slug: string,
    overrides?: Partial<Record<GeopoRegionActionKey, string>>,
): ActionLink[] {
    const base = `/formation/geopolitique/${slug}`;
    const o = overrides ?? {};
    return [
        { label: 'Cours', icon: BookOpen, to: o.hub ?? base, kind: 'primary' },
        { label: 'Chronologie', icon: Target, to: o.chronologie ?? `${base}/chronologie` },
        { label: 'Flashcards', icon: Brain, to: o.flashcards ?? `${base}/flashcards` },
        { label: 'Études de cas', icon: Play, to: o.sujets ?? `${base}/etudes-de-cas` },
        { label: 'Auteurs', icon: Lightbulb, to: o.auteurs ?? `${base}/auteurs` },
    ];
}
