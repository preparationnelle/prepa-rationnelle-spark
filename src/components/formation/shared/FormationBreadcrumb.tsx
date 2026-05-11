import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export type Crumb = { label: string; to?: string };

export interface FormationBreadcrumbProps {
    crumbs: Crumb[];
    showHomeIcon?: boolean;
}

const FormationBreadcrumb: React.FC<FormationBreadcrumbProps> = ({
    crumbs,
    showHomeIcon = true,
}) => {
    if (!crumbs || crumbs.length === 0) return null;

    return (
        <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
            <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
                <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
                    {crumbs.map((crumb, idx) => {
                        const isLast = idx === crumbs.length - 1;
                        const isFirst = idx === 0;
                        const content = (
                            <>
                                {isFirst && showHomeIcon && <Home className="h-3.5 w-3.5" />}
                                <span>{crumb.label}</span>
                            </>
                        );

                        return (
                            <React.Fragment key={`${crumb.label}-${idx}`}>
                                {isLast ? (
                                    <span className="carnet-eyebrow text-[11px]">{crumb.label}</span>
                                ) : crumb.to ? (
                                    <Link
                                        to={crumb.to}
                                        className="flex items-center gap-1 hover:text-carnet-red transition-colors"
                                    >
                                        {content}
                                    </Link>
                                ) : (
                                    <span className="flex items-center gap-1">{content}</span>
                                )}
                                {!isLast && (
                                    <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default FormationBreadcrumb;
