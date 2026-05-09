import React from 'react';

interface CarnetHeroProps {
  eyebrow: string;
  title: string;
  accent?: string;
  tagline?: React.ReactNode;
  highlight?: string;
  handNote?: string;
}

export const CarnetHero: React.FC<CarnetHeroProps> = ({
  eyebrow,
  title,
  accent,
  tagline,
  highlight,
  handNote,
}) => {
  const renderTagline = () => {
    if (!tagline) return null;
    if (typeof tagline !== 'string' || !highlight) {
      return <>{tagline}</>;
    }
    const parts = tagline.split(highlight);
    if (parts.length === 1) return <>{tagline}</>;
    return (
      <>
        {parts[0]}
        <span className="carnet-hl font-lora italic">{highlight}</span>
        {parts.slice(1).join(highlight)}
      </>
    );
  };

  return (
    <header className="mb-16 relative">
      <div className="carnet-eyebrow mb-5">{eyebrow}</div>
      <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
        {title}
        {accent && (
          <>
            {' '}
            <em className="font-lora italic text-carnet-red">{accent}</em>
          </>
        )}
        .
      </h1>
      {tagline && (
        <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
          {renderTagline()}
        </p>
      )}
      {handNote && (
        <div
          className="carnet-hand hidden lg:block absolute pointer-events-none whitespace-pre-line"
          style={{
            right: 0,
            top: 8,
            fontSize: 24,
            transform: 'rotate(-4deg)',
            maxWidth: 200,
            lineHeight: 1.15,
            textAlign: 'right',
          }}
        >
          {handNote}
        </div>
      )}
    </header>
  );
};

export default CarnetHero;
