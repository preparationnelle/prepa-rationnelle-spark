import React from 'react';

export interface FormationSectionHeaderProps {
    number: number | string;
    title: string;
    description?: string;
}

const FormationSectionHeader: React.FC<FormationSectionHeaderProps> = ({
    number,
    title,
    description,
}) => {
    const formattedNumber = typeof number === 'number' ? String(number).padStart(2, '0') : number;

    return (
        <div className="flex items-baseline gap-4 mb-8">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">
                {formattedNumber}
            </span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <div>
                <h2 className="font-lora text-[28px] sm:text-[34px] text-carnet-ink leading-tight">
                    {title}
                </h2>
                {description && (
                    <p className="font-instrument text-[14px] text-carnet-ink-soft mt-1">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default FormationSectionHeader;
