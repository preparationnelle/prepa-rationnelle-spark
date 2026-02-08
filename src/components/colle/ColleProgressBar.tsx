import React from 'react';
import { Progress } from '@/components/ui/progress';

interface ColleProgressBarProps {
  current: number;
  total: number;
}

export const ColleProgressBar: React.FC<ColleProgressBarProps> = ({
  current,
  total,
}) => {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="space-y-2 w-full">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">
          Question {current} / {total}
        </span>
        <span className="text-muted-foreground">{percentage}%</span>
      </div>
      <Progress
        value={percentage}
        className="h-2 bg-orange-100"
        aria-label={`Progression : ${current} sur ${total} questions`}
        style={
          {
            '--progress-foreground': '#FF6A00',
          } as React.CSSProperties
        }
      />
      <style>{`
        [style*="--progress-foreground"] > [data-state] {
          background-color: #FF6A00;
        }
      `}</style>
    </div>
  );
};

export default ColleProgressBar;
