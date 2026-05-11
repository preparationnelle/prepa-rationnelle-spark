import React from 'react';
import { Link } from 'react-router-dom';
import { type LucideIcon } from 'lucide-react';

export interface FormationResourceTileProps {
    to: string;
    Icon: LucideIcon;
    title: string;
    subtitle?: string;
}

const FormationResourceTile: React.FC<FormationResourceTileProps> = ({
    to,
    Icon,
    title,
    subtitle,
}) => {
    return (
        <Link
            to={to}
            className="carnet-card group block p-5 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] hover:-translate-y-0.5"
        >
            <div className="w-10 h-10 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center mb-3">
                <Icon className="h-5 w-5 text-carnet-red" />
            </div>
            <h3 className="font-lora text-[17px] text-carnet-ink mb-1 leading-tight group-hover:text-carnet-red transition-colors">
                {title}
            </h3>
            {subtitle && (
                <p className="font-instrument text-[12px] text-carnet-ink-mute leading-snug">
                    {subtitle}
                </p>
            )}
        </Link>
    );
};

export default FormationResourceTile;
