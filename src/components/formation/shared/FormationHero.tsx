import React from 'react';
import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

export interface FormationHeroTag {
    label: string;
    icon?: LucideIcon;
    variant?: 'solid' | 'outline';
}

export interface FormationHeroProps {
    eyebrow?: string;
    Icon?: LucideIcon;
    title: React.ReactNode;
    titleAccent?: string;
    subtitle?: React.ReactNode;
    tags?: FormationHeroTag[];
    annotation?: string;
}

const FormationHero: React.FC<FormationHeroProps> = ({
    eyebrow,
    Icon,
    title,
    titleAccent,
    subtitle,
    tags,
    annotation,
}) => {
    return (
        <section className="relative py-20 lg:py-24">
            <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-[820px]"
                >
                    {eyebrow && <div className="carnet-eyebrow mb-6">{eyebrow}</div>}

                    <div className="flex items-center gap-4 mb-6">
                        {Icon && (
                            <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                                <Icon className="h-6 w-6 text-carnet-red" />
                            </div>
                        )}
                        <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-carnet-ink tracking-tight">
                            {title}
                            {titleAccent && (
                                <>
                                    {' '}
                                    <em className="font-lora italic text-carnet-red">{titleAccent}</em>
                                </>
                            )}
                        </h1>
                    </div>

                    {subtitle && (
                        <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-8">
                            {subtitle}
                        </p>
                    )}

                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap items-center gap-4">
                            {tags.map((tag, idx) => {
                                const TagIcon = tag.icon;
                                const className = tag.variant === 'outline'
                                    ? 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]'
                                    : 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]';
                                return (
                                    <div key={`${tag.label}-${idx}`} className={className}>
                                        {TagIcon && <TagIcon className="h-4 w-4 text-carnet-red" />}
                                        {tag.variant === 'outline' ? (
                                            <span className="carnet-eyebrow text-[11px]">{tag.label}</span>
                                        ) : (
                                            <span className="font-instrument text-[13px] font-semibold text-carnet-ink">
                                                {tag.label}
                                            </span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {annotation && (
                        <div
                            className="carnet-hand text-[24px] mt-8 hidden md:block"
                            style={{ transform: 'rotate(-2deg)' }}
                        >
                            {annotation}
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default FormationHero;
