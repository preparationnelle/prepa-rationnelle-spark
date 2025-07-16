import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, PlayCircle, ArrowLeft } from 'lucide-react';

interface ModuleNavigationCardsProps {
  currentModule: {
    id: number;
    title: string;
    slug: string;
    color: string;
  };
  isExercisePage?: boolean;
}

const ModuleNavigationCards: React.FC<ModuleNavigationCardsProps> = ({ 
  currentModule, 
  isExercisePage = false 
}) => {
  const courseLink = `/formation/python-${currentModule.slug}`;
  const exerciseLink = `/formation/python-${currentModule.slug}-exercices`;

  if (isExercisePage) {
    // Show "Return to course" card on exercise pages
    return (
      <div className="mt-12">
        <Link to={courseLink} className="block">
          <Card className="border-2 hover:border-orange-300 transition-all duration-200 hover:shadow-lg group cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-orange-50 border border-orange-200 group-hover:bg-orange-100 transition-colors">
                  <ArrowLeft className="h-6 w-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Retour au cours du Module {currentModule.id}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Revoir la théorie et les concepts - {currentModule.title}
                  </p>
                </div>
                <div className="p-2 rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors">
                  <BookOpen className="h-5 w-5 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    );
  }

  // Show course ↔ exercises navigation on course pages
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Course Card */}
      <Link to={courseLink} className="block">
        <Card className="border-2 hover:border-blue-300 transition-all duration-200 hover:shadow-lg group cursor-pointer h-full">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 group-hover:bg-blue-100 transition-colors">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Cours du Module {currentModule.id}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Théorie et concepts - {currentModule.title}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>

      {/* Exercises Card */}
      <Link to={exerciseLink} className="block">
        <Card className={`border-2 hover:border-${currentModule.color}-300 transition-all duration-200 hover:shadow-lg group cursor-pointer h-full`}>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg bg-${currentModule.color}-500 text-white group-hover:bg-${currentModule.color}-600 transition-colors`}>
                <PlayCircle className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Exercices du Module {currentModule.id}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Pratique et applications - {currentModule.title}
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