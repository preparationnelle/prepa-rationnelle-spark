import React from 'react';
import { AlertTriangle } from 'lucide-react';

type Variant = 'definition' | 'exemple' | 'propriete' | 'piege';

interface CarnetCalloutProps {
  variant?: Variant;
  label?: string;
  children: React.ReactNode;
  className?: string;
}

const defaultLabels: Record<Variant, string> = {
  definition: 'Définition',
  exemple: 'Exemple',
  propriete: 'Propriété',
  piege: 'Pièges en prépa',
};

export const CarnetCallout: React.FC<CarnetCalloutProps> = ({
  variant = 'exemple',
  label,
  children,
  className = '',
}) => {
  const finalLabel = label ?? defaultLabels[variant];

  if (variant === 'piege') {
    return (
      <div className={`bg-carnet-ink rounded-md p-6 relative ${className}`}>
        <div
          className="absolute -top-3 left-6 bg-carnet-red text-carnet-paper-2 px-3 py-0.5 carnet-hand text-[16px] font-semibold"
          style={{ transform: 'rotate(-3deg)' }}
        >
          {finalLabel}
        </div>
        <div className="flex items-start gap-3 mt-2">
          <AlertTriangle className="h-4 w-4 text-carnet-red mt-1 flex-shrink-0" />
          <div className="font-instrument text-[14px] text-carnet-paper leading-[1.65] flex-1">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 ${className}`}
    >
      <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">
        {finalLabel}
      </div>
      <div className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.65]">
        {children}
      </div>
    </div>
  );
};

export default CarnetCallout;
