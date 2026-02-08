import React, { useState, useEffect, useMemo } from 'react';

interface ColleSessionTimerProps {
  startTime: Date | string;
  dureeCible: number; // minutes
}

export const ColleSessionTimer: React.FC<ColleSessionTimerProps> = ({
  startTime,
  dureeCible,
}) => {
  const startDate = useMemo(
    () => (startTime instanceof Date ? startTime : new Date(startTime)),
    [startTime]
  );

  const [elapsedSeconds, setElapsedSeconds] = useState(() => {
    return Math.max(0, Math.floor((Date.now() - startDate.getTime()) / 1000));
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedSeconds(
        Math.max(0, Math.floor((Date.now() - startDate.getTime()) / 1000))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;
  const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const cibleSeconds = dureeCible * 60;
  const ratio = elapsedSeconds / cibleSeconds;

  const colorClass = useMemo(() => {
    if (ratio > 1) return 'text-red-600';
    if (ratio >= 0.8) return 'text-[#FF6A00]';
    return 'text-emerald-600';
  }, [ratio]);

  return (
    <div className="flex flex-col items-center gap-1" role="timer" aria-live="polite" aria-label="Temps \u00e9coul\u00e9">
      <span className={`text-3xl font-mono font-bold tabular-nums ${colorClass} transition-colors duration-300`}>
        {formatted}
      </span>
      <span className="text-xs text-muted-foreground">
        Dur\u00e9e recommand\u00e9e : {dureeCible} min
      </span>
    </div>
  );
};

export default ColleSessionTimer;
