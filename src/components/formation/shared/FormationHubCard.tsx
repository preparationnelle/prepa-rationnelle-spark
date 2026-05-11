import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, type LucideIcon } from 'lucide-react';

export interface FormationHubCardProps {
    to: string;
    number?: number | string;
    Icon?: LucideIcon;
    title: string;
    description: string;
    bullets?: string[];
    cta?: string;
}

const FormationHubCard: React.FC<FormationHubCardProps> = ({
    to,
    number,
    Icon,
    title,
    description,
    bullets,
    cta = 'Découvrir',
}) => {
    const formattedNumber =
        number !== undefined
            ? typeof number === 'number' ? String(number).padStart(2, '0') : number
            : undefined;

    return (
        <Link
            to={to}
            className="carnet-card group relative block p-7 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] hover:-translate-y-0.5 flex flex-col h-full overflow-hidden"
        >
            {formattedNumber && (
                <span className="carnet-hand text-carnet-red text-[44px] leading-none font-semibold mb-3 block">
                    {formattedNumber}
                </span>
            )}

            {Icon && (
                <div className="w-12 h-12 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-carnet-red" />
                </div>
            )}

            <h3 className="font-lora text-[24px] text-carnet-ink mb-2 leading-tight group-hover:text-carnet-red transition-colors">
                {title}
            </h3>
            <p className="font-instrument text-[14px] text-carnet-ink-soft leading-relaxed">
                {description}
            </p>

            {bullets && bullets.length > 0 && (
                <ul className="mt-4 space-y-2 pt-4 border-t border-dashed border-[rgba(78,55,30,0.18)]">
                    {bullets.map((b, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-2 font-instrument text-[12px] text-carnet-ink-mute"
                        >
                            <span className="text-carnet-red mt-[2px]">→</span>
                            <span className="leading-relaxed">{b}</span>
                        </li>
                    ))}
                </ul>
            )}

            <span className="carnet-eyebrow mt-auto pt-5 inline-flex items-center gap-1 text-[11px]">
                {cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
        </Link>
    );
};

export default FormationHubCard;
