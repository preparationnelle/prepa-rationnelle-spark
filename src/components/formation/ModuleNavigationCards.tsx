import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, PlayCircle, ArrowLeft, ArrowRight } from 'lucide-react';

interface ModuleNavigationCardsProps {
  currentModule: {
    id: number;
    title: string;
    slug: string;
    color: string;
  };
  isExercisePage?: boolean;
  totalExercises?: number;
  currentExerciseId?: number;
  onNavigate?: (exerciseId: number) => void;
}

const ModuleNavigationCards: React.FC<ModuleNavigationCardsProps> = ({ 
  currentModule, 
  isExercisePage = false,
  totalExercises,
  currentExerciseId,
  onNavigate
}) => {
  const courseLink = `/formation/python-${currentModule.slug}`;
  const exerciseLink = `/formation/python-${currentModule.slug}-exercices`;

  if (isExercisePage && currentExerciseId && totalExercises && onNavigate) {
    const isFirstExercise = currentExerciseId === 1;
    const isLastExercise = currentExerciseId === totalExercises;

    return (
      <div className="mt-16 mb-12">
        <Card className="border-2 p-4">
          <CardContent className="flex items-center justify-between p-2">
            <Button 
              onClick={() => onNavigate(currentExerciseId - 1)} 
              disabled={isFirstExercise}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Exercice précédent
            </Button>
            
            <Link to={courseLink}>
              <Button variant="ghost" className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>Module {currentModule.id} - {currentModule.title}</span>
              </Button>
            </Link>

            <Button 
              onClick={() => onNavigate(currentExerciseId + 1)} 
              disabled={isLastExercise}
              variant="outline"
              className="flex items-center gap-2"
            >
              Exercice suivant
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Fallback for course page or if props are missing
  const link = isExercisePage ? courseLink : exerciseLink;
  const Icon = isExercisePage ? ArrowLeft : PlayCircle;
  const title = isExercisePage ? `Retour au cours du Module ${currentModule.id}` : `Exercices du Module ${currentModule.id}`;
  const subtitle = isExercisePage ? `Revoir la théorie - ${currentModule.title}` : `Mettre en pratique - ${currentModule.title}`;

  return (
    <div className="mt-16 mb-12">
      <Link to={link} className="block">
        <Card className={`border-2 border-gray-200 hover:border-${currentModule.color}-400 transition-all duration-300 hover:shadow-xl group cursor-pointer bg-white hover:bg-${currentModule.color}-50 p-2`}>
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className={`p-4 rounded-xl bg-${currentModule.color}-100 border-2 border-${currentModule.color}-200 group-hover:bg-${currentModule.color}-200 transition-all duration-300`}>
                <Icon className={`h-8 w-8 text-${currentModule.color}-600`} />
              </div>
              <div className="flex-1">
                <h3 className={`text-2xl font-bold text-gray-900 mb-2 group-hover:text-${currentModule.color}-800 transition-colors`}>
                  {title}
                </h3>
                <p className={`text-base text-gray-600 group-hover:text-${currentModule.color}-700 transition-colors`}>
                  {subtitle}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default ModuleNavigationCards;