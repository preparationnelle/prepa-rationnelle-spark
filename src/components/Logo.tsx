import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg'
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Text only */}
      <span className={`font-bold text-orange-500 uppercase tracking-wide ${textSizes[size]}`}>
        Prepa Rationnelle
      </span>
    </div>
  );
};

export default Logo; 