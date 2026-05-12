
import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const TestimonialCard = ({ quote, name, role, initials }: TestimonialCardProps) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className="h-3.5 w-3.5 fill-carnet-red text-carnet-red" />
    ));
  };

  return (
    <div className="group bg-carnet-paper-2 rounded-2xl border border-carnet-rule hover:border-carnet-red/60 transition-all duration-300 overflow-hidden flex flex-col font-dm-sans h-full">
      {/* Trait supérieur signature */}
      <div className="h-[2px] bg-carnet-red w-full opacity-70 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-11 h-11 bg-carnet-paper-2 border border-carnet-red/30 rounded-full flex items-center justify-center text-carnet-red-deep font-semibold text-base flex-shrink-0">
            {initials}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-carnet-ink mb-1.5 text-base">
              {name}
            </h3>
            <div className="flex items-center gap-0.5 mb-2">
              {renderStars()}
            </div>
            <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.08em] text-carnet-red-deep bg-carnet-paper-2 border border-carnet-rule px-2 py-0.5 rounded">
              {role}
            </span>
          </div>
        </div>

        <div className="relative pl-4 border-l-2 border-carnet-red/40 mt-2 flex-1">
          <Quote className="h-4 w-4 text-carnet-red/50 absolute -top-1 -left-[9px] bg-carnet-paper-2" />
          <p className="text-sm text-carnet-ink-soft leading-relaxed italic">
            "{quote}"
          </p>
        </div>
      </div>
    </div>
  );
};
