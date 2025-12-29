import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Play, Target, LucideIcon, Brain } from 'lucide-react';
import { getAllRoutePaths } from '@/config/routes';

interface ChapterCardProps {
  id: number;
  slug: string;
  title: string;
  icon: LucideIcon;
  color: string;
  symbol: string;
  description?: string;
}

const ChapterCard: React.FC<ChapterCardProps> = ({
  id,
  slug,
  title,
  icon: Icon,
  color,
  symbol,
  description = "Théorie approfondie et applications pratiques Cours Exercices Quiz Flashcards"
}) => {
  const allPaths = getAllRoutePaths();

  const coursePath = `/formation/maths-${slug}`;
  const exercisesPath = `/formation/maths-${slug}-exercices`;
  const flashcardsPath = `/formation/maths-${slug}-flashcards`;
  const quizPath = `/formation/maths-${slug}-quiz`;

  const hasCourse = allPaths.includes(coursePath);
  const hasExercises = allPaths.includes(exercisesPath);
  const hasFlashcards = true; // Always show flashcards button


  const hasQuiz = true; // Always show quiz button

  const resolvedCourseHref = hasCourse ? coursePath : (hasExercises ? exercisesPath : undefined);

  return (
    <Card className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-orange-200 hover:border-orange-300 h-full flex flex-col">
      <CardHeader className="text-center pb-4">
        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl relative">
          <span className="text-3xl font-bold text-white">{symbol}</span>
          <div className="absolute -top-1 -right-1 bg-white text-orange-600 rounded-full w-9 h-9 flex items-center justify-center text-xs font-bold border-2 border-orange-500 shadow-md">
            <Brain className="h-3.5 w-3.5 mr-0.5" />
            {id}
          </div>
        </div>
        <Badge variant="outline" className="text-orange-600 border-orange-300 bg-orange-50 text-center px-4 py-2.5 text-sm font-semibold w-full flex items-center justify-center rounded-xl">
          Chapitre {id} : {title}
        </Badge>
      </CardHeader>
      <CardContent className="pt-0 flex-1 flex flex-col">
        <p className="text-sm text-gray-600 mb-6 text-center leading-relaxed flex-1">
          {description}
        </p>
        <div className="space-y-3 mt-auto">
          {resolvedCourseHref && (
            <Link to={resolvedCourseHref} className="w-full">
              <Button variant="default" className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg rounded-xl">
                <BookOpen className="mr-2 h-4 w-4" />
                Cours
              </Button>
            </Link>
          )}

          {hasExercises && (
            <Link to={exercisesPath} className="w-full">
              <Button variant="outline" className="w-full border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-semibold transition-all duration-300 hover:scale-105 rounded-xl">
                <Play className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
          )}

          {hasFlashcards && (
            <Link to={flashcardsPath} className="w-full">
              <Button variant="outline" className="w-full border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-semibold transition-all duration-300 hover:scale-105 rounded-xl">
                <Brain className="mr-2 h-4 w-4" />
                Flashcards
              </Button>
            </Link>
          )}

          {hasQuiz && (
            <Link to={quizPath} className="w-full">
              <Button variant="outline" className="w-full border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-semibold transition-all duration-300 hover:scale-105 rounded-xl">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ChapterCard;
