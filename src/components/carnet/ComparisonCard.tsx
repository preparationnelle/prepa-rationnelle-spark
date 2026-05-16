import React from 'react';

interface ComparisonCardProps {
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const ComparisonCard: React.FC<ComparisonCardProps> = ({
  label,
  children,
  className = '',
}) => {
  return (
    <div
      className={`relative bg-carnet-paper-2 rounded-md p-6 sm:p-7 ${className}`}
      style={{
        border: '1.5px dashed #C1443A',
      }}
    >
      <div className="font-instrument text-[12px] uppercase tracking-[0.14em] text-carnet-red font-bold mb-4">
        {label}
      </div>
      <div className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.65]">
        {children}
      </div>
    </div>
  );
};

interface ComparisonGridProps {
  children: React.ReactNode;
  cols?: 2 | 3;
  className?: string;
}

export const ComparisonGrid: React.FC<ComparisonGridProps> = ({
  children,
  cols = 2,
  className = '',
}) => {
  const colsClass = cols === 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2';
  return (
    <div className={`grid ${colsClass} gap-4 sm:gap-5 ${className}`}>
      {children}
    </div>
  );
};

export default ComparisonCard;
