import React from 'react';

interface CarnetSectionProps {
  number: string;
  title: React.ReactNode;
  tilt?: 'left' | 'right' | 'none';
  children: React.ReactNode;
  className?: string;
}

export const CarnetSection: React.FC<CarnetSectionProps> = ({
  number,
  title,
  tilt = 'left',
  children,
  className = '',
}) => {
  const tiltClass =
    tilt === 'left' ? 'carnet-tilt-l' : tilt === 'right' ? 'carnet-tilt-r' : '';

  return (
    <section className={`mb-14 ${className}`}>
      <div className="flex items-baseline gap-4 mb-6">
        <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">
          {number}
        </span>
        <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
        <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
          {title}
        </h2>
      </div>
      <div className={`carnet-card p-8 sm:p-10 ${tiltClass}`}>{children}</div>
    </section>
  );
};

export default CarnetSection;
