import React from 'react';

type Stat = {
  value: string;
  label: string;
};

type CivStatsProps = {
  title?: string;
  stats: Stat[];
};

export const CivStats: React.FC<CivStatsProps> = ({ title, stats }) => {
  return (
    <div className="bg-carnet-paper-2 border border-carnet-rule rounded-xl overflow-hidden mb-10">
      <div className="h-[2px] bg-pr-orange" />
      {title && (
        <div className="px-6 pt-5">
          <h2 className="font-dm-serif text-xl text-pr-black">{title}</h2>
        </div>
      )}
      <div className={`grid grid-cols-2 ${stats.length > 2 ? 'md:grid-cols-4' : ''} gap-0 p-6`}>
        {stats.map((s, i) => (
          <div
            key={i}
            className={`text-center ${i > 0 ? 'border-l border-pr-gray-light' : ''} px-2`}
          >
            <div className="font-dm-serif text-3xl text-pr-orange leading-none mb-2">{s.value}</div>
            <div className="text-[10px] text-pr-gray-mid font-dm-sans font-semibold uppercase tracking-[0.1em]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CivStats;
