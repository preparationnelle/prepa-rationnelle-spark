
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Clock } from 'lucide-react';

interface ProgressionData {
  totalSentences: number;
  completedSentences: number;
  averageScore: number;
  weakPoints: string[];
  lastSession: Date;
  streak: number;
}

interface ProgressionTrackerProps {
  language: string;
  currentScore?: number;
  completedSentence?: boolean;
}

export const ProgressionTracker: React.FC<ProgressionTrackerProps> = ({
  language,
  currentScore,
  completedSentence
}) => {
  const [progression, setProgression] = useState<ProgressionData>({
    totalSentences: 0,
    completedSentences: 0,
    averageScore: 0,
    weakPoints: [],
    lastSession: new Date(),
    streak: 0
  });

  // Load progression data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`theme-progression-${language}`);
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        // Ensure lastSession is a Date object
        if (parsedData.lastSession) {
          parsedData.lastSession = new Date(parsedData.lastSession);
        }
        setProgression(parsedData);
      } catch (error) {
        console.error('Error parsing progression data:', error);
      }
    }
  }, [language]);

  // Stable function to save progression
  const saveProgression = useCallback((updatedProgression: ProgressionData) => {
    localStorage.setItem(`theme-progression-${language}`, JSON.stringify(updatedProgression));
  }, [language]);

  // Save progression when a sentence is completed
  useEffect(() => {
    if (completedSentence && currentScore !== undefined) {
      const updated = {
        ...progression,
        totalSentences: progression.totalSentences + 1,
        completedSentences: progression.completedSentences + 1,
        averageScore: Math.round(
          (progression.averageScore * progression.totalSentences + currentScore) / 
          (progression.totalSentences + 1)
        ),
        lastSession: new Date(),
        streak: currentScore >= 7 ? progression.streak + 1 : 0
      };
      
      setProgression(updated);
      saveProgression(updated);
    }
  }, [completedSentence, currentScore, progression.totalSentences, progression.completedSentences, progression.averageScore, progression.streak, saveProgression]);

  const progressPercentage = progression.totalSentences > 0 
    ? (progression.completedSentences / Math.max(progression.totalSentences, 10)) * 100 
    : 0;

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-green-600";
    if (score >= 6) return "text-amber-600";
    return "text-red-600";
  };

  return (
    <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-indigo-800">
          <TrendingUp className="h-5 w-5" />
          Progression - {language.toUpperCase()}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Main statistics */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">
              {progression.completedSentences}
            </div>
            <div className="text-xs text-muted-foreground">Phrases</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${getScoreColor(progression.averageScore)}`}>
              {progression.averageScore}/10
            </div>
            <div className="text-xs text-muted-foreground">Moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">
              {progression.streak}
            </div>
            <div className="text-xs text-muted-foreground">Série</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-indigo-600">Objectif session</span>
            <span className="text-indigo-600">{Math.min(progressPercentage, 100).toFixed(0)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Weak points */}
        {progression.weakPoints.length > 0 && (
          <div>
            <div className="text-sm font-medium text-indigo-700 mb-2">Points à travailler :</div>
            <div className="flex flex-wrap gap-1">
              {progression.weakPoints.slice(0, 3).map((point, index) => (
                <Badge key={index} variant="outline" className="text-xs border-indigo-300">
                  {point}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Last session */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          Dernière session : {progression.lastSession.toLocaleDateString()}
        </div>
      </CardContent>
    </Card>
  );
};
