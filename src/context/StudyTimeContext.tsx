import React, { createContext, useContext, ReactNode } from 'react';
import { useStudyTime, formatStudyTime } from '@/hooks/useStudyTime';

interface StudyTimeContextType {
    currentSessionSeconds: number;
    totalWeekSeconds: number;
    weeklyRank: number | null;
    isTracking: boolean;
    formatTime: (seconds: number) => string;
}

const StudyTimeContext = createContext<StudyTimeContextType | null>(null);

export const useStudyTimeContext = () => {
    const context = useContext(StudyTimeContext);
    if (!context) {
        // Return default values if used outside provider (e.g., not logged in)
        return {
            currentSessionSeconds: 0,
            totalWeekSeconds: 0,
            weeklyRank: null,
            isTracking: false,
            formatTime: formatStudyTime
        };
    }
    return context;
};

export const StudyTimeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const studyTimeData = useStudyTime();

    const value: StudyTimeContextType = {
        ...studyTimeData,
        formatTime: formatStudyTime
    };

    return (
        <StudyTimeContext.Provider value={value}>
            {children}
        </StudyTimeContext.Provider>
    );
};
