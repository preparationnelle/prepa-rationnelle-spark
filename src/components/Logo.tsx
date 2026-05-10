import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const textSizes = {
    sm: 'text-sm',       // 14px (was 12px — too small for a primary brand affordance)
    md: 'text-base',     // 16px
    lg: 'text-xl'        // 20px
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Text only */}
      <span className={`font-bold text-pr-orange uppercase tracking-wide ${textSizes[size]}`}>
        Prepa Rationnelle
      </span>
    </div>
  );
};

export default Logo; 