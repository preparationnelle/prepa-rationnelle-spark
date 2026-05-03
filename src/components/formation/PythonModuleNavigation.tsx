import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, BookOpen, Calculator, TrendingUp, BarChart3, CheckCircle } from 'lucide-react';

interface ModuleInfo {
  id: number;
  title: string;
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  hasExercises?: boolean;
}

const modules: ModuleInfo[] = [
  { id: 0, title: 'Fondamentaux', slug: 'fondamentaux', icon: BookOpen, hasExercises: true },
  { id: 1, title: 'Matrices', slug: 'matrices', icon: Calculator, hasExercises: true },
  { id: 2, title: 'Analyse', slug: 'analyse', icon: TrendingUp, hasExercises: true },
  { id: 3, title: 'Probabilités', slug: 'probabilites', icon: BarChart3, hasExercises: true },
];

const PythonModuleNavigation: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const getCurrentModule = () => {
    for (const module of modules) {
      if (path.includes(module.slug)) {
        return {
          module,
          type: path.includes('exercices') ? 'exercices' : 'cours',
          isExercises: path.includes('exercices'),
        };
      }
    }
    return null;
  };

  const current = getCurrentModule();
  if (!current) return null;
  const { module } = current;
  const currentIndex = modules.findIndex((m) => m.id === module.id);
  const previousModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
  const nextModule = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

  return (
    <div className="space-y-6 font-dm-sans">
      <Card className="border border-pr-gray-light bg-white shadow-sm rounded-2xl overflow-hidden">
        <div className="h-[2px] w-full bg-pr-orange" />
        <CardContent className="p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1">
              {previousModule ? (
                <Link to={`/formation/python-${previousModule.slug}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange-soft rounded-full"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <previousModule.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">
                      Module {previousModule.id} — {previousModule.title}
                    </span>
                    <span className="sm:hidden">Précédent</span>
                  </Button>
                </Link>
              ) : (
                <div className="w-full" />
              )}
            </div>

            <div className="flex items-center gap-2 mx-4">
              {modules.map((mod, index) => (
                <div
                  key={mod.id}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-6 bg-pr-orange'
                      : index < currentIndex
                      ? 'w-1.5 bg-pr-orange-soft'
                      : 'w-1.5 bg-pr-gray-light'
                  }`}
                />
              ))}
            </div>

            <div className="flex-1 flex justify-end">
              {nextModule ? (
                <Link to={`/formation/python-${nextModule.slug}`}>
                  <Button
                    size="sm"
                    className="bg-pr-orange hover:bg-pr-orange-dark text-white rounded-full shadow-sm"
                  >
                    <span className="hidden sm:inline">
                      Module {nextModule.id} — {nextModule.title}
                    </span>
                    <span className="sm:hidden">Suivant</span>
                    <nextModule.icon className="h-4 w-4 ml-1" />
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <div className="flex items-center gap-2 text-pr-orange-dark">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Formation terminée !</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PythonModuleNavigation;
