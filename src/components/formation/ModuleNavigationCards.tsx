import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowLeft, ArrowRight, HelpCircle, List, GraduationCap } from 'lucide-react';

interface ModuleNavigationCardsProps {
  currentModule: {
    id: number;
    title: string;
    slug: string;
    color: string;
  };
  isExercisePage?: boolean;
  totalExercises?: number;
  currentExerciseId?: number | null;
  onNavigate?: (exerciseId: number) => void;
  isQuizMode?: boolean;
  nextModule?: {
    id: number;
    title: string;
    slug: string;
  };
}

const ModuleNavigationCards: React.FC<ModuleNavigationCardsProps> = ({
  currentModule,
  isExercisePage = false,
  totalExercises,
  currentExerciseId,
  onNavigate,
  isQuizMode = false,
  nextModule
}) => {
  const navigate = useNavigate();
  const courseLink = `/formation/python-${currentModule.slug}`;

  // Specific Exercise Navigation (keeps existing logic but styling updated)
  if (isExercisePage && currentExerciseId && totalExercises && onNavigate) {
    const isFirstExercise = currentExerciseId === 1;
    const isLastExercise = currentExerciseId === totalExercises;

    return (
      <div className="mt-16 mb-12">
        <Card className="border-none bg-white shadow-[0_4px_20px_rgb(0,0,0,0.05)] rounded-[20px] overflow-hidden">
          <CardContent className="flex items-center justify-between p-4">
            <Button
              onClick={() => onNavigate(currentExerciseId - 1)}
              disabled={isFirstExercise}
              variant="ghost"
              className="flex items-center gap-2 hover:bg-gray-50 text-gray-700 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden md:inline">Précédent</span>
            </Button>

            <Link to={courseLink}>
              <Button variant="outline" className="flex items-center gap-2 border-gray-200 text-blue-700 bg-blue-50/50 hover:bg-blue-50 border-blue-100">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Module {currentModule.id} - Cours</span>
                <span className="sm:hidden">Cours</span>
              </Button>
            </Link>

            <Button
              onClick={() => onNavigate(currentExerciseId + 1)}
              disabled={isLastExercise}
              variant="ghost"
              className="flex items-center gap-2 hover:bg-gray-50 text-gray-700 font-medium"
            >
              <span className="hidden md:inline">Suivant</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Dashboard Navigation (Course, Quiz/Exo Switch, Next Module)
  return (
    <div className="mt-12 mb-16 space-y-6">
      {/* Separator */}
      <div className="flex items-center gap-4 text-gray-300">
        <div className="h-px bg-gray-200 flex-1" />
        <span className="text-sm font-medium uppercase tracking-wider text-gray-400">Navigation du Module</span>
        <div className="h-px bg-gray-200 flex-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. Back to Course */}
        <Link to={courseLink} className="group h-full">
          <Card className="h-full border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white group-hover:bg-blue-50/30 rounded-2xl overflow-hidden">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-100 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-800 transition-colors">Retour au Cours</h3>
                <p className="text-sm text-gray-500 group-hover:text-blue-600 mt-1">Revoir la théorie</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* 2. Toggle Quiz / Exercises */}
        <div
          onClick={() => {
            // Toggle Quiz Mode using URL param
            const currentPath = window.location.pathname;
            if (isQuizMode) {
              navigate(currentPath); // Remove query params to go to exercises
            } else {
              navigate(`${currentPath}?quiz=true`); // Add query param to go to quiz
            }
          }}
          className="group h-full cursor-pointer"
        >
          <Card className={`h-full border transition-all duration-300 bg-white rounded-2xl overflow-hidden ${isQuizMode ? 'border-orange-200 hover:border-orange-400 hover:bg-orange-50/30' : 'border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50/30'}`}>
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`p-3 rounded-xl transition-transform duration-300 group-hover:scale-110 ${isQuizMode ? 'bg-orange-100 text-orange-600' : 'bg-indigo-100 text-indigo-600'}`}>
                {isQuizMode ? <List className="h-6 w-6" /> : <HelpCircle className="h-6 w-6" />}
              </div>
              <div>
                <h3 className={`font-bold transition-colors ${isQuizMode ? 'text-gray-900 group-hover:text-orange-800' : 'text-gray-900 group-hover:text-indigo-800'}`}>
                  {isQuizMode ? "Voir les Exercices" : "Faire le Quiz"}
                </h3>
                <p className={`text-sm mt-1 ${isQuizMode ? 'text-gray-500 group-hover:text-orange-600' : 'text-gray-500 group-hover:text-indigo-600'}`}>
                  {isQuizMode ? "S'entraîner sur des cas pratiques" : "Tester vos connaissances"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 3. Next Module (if available) */}
        {nextModule ? (
          <Link to={`/formation/python-${nextModule.slug}-exercices`} className="group h-full">
            <Card className="h-full border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 bg-white group-hover:bg-green-50/30 rounded-2xl overflow-hidden">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-green-100 text-green-600 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-green-800 transition-colors">Module Suivant</h3>
                  <p className="text-sm text-gray-500 group-hover:text-green-600 mt-1">
                    {nextModule.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ) : (
          <Link to="/formation" className="group h-full">
            <Card className="h-full border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 bg-white/50 hover:bg-gray-50 rounded-2xl overflow-hidden">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gray-100 text-gray-500 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-gray-700 transition-colors">Menu Principal</h3>
                  <p className="text-sm text-gray-500 mt-1">Toutes les formations</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ModuleNavigationCards;