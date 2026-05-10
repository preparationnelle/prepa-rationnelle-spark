import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, BookOpen, Calculator, TrendingUp, BarChart3, CheckCircle } from 'lucide-react';

interface ModuleInfo {
  id: number;
  title: string;
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
}

const modules: ModuleInfo[] = [
  { id: 0, title: 'Fondamentaux', slug: 'fondamentaux', icon: BookOpen },
  { id: 1, title: 'Matrices', slug: 'matrices', icon: Calculator },
  { id: 2, title: 'Analyse', slug: 'analyse', icon: TrendingUp },
  { id: 3, title: 'Probabilités', slug: 'probabilites', icon: BarChart3 },
];

const PythonModuleNavigation: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const getCurrentModule = () => {
    for (const module of modules) {
      if (path.includes(module.slug)) {
        return { module, isExercises: path.includes('exercices') };
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
    <div className="carnet-card p-5 font-instrument">
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1">
          {previousModule ? (
            <Link to={`/formation/python-${previousModule.slug}`}>
              <Button
                variant="outline"
                size="sm"
                className="border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument rounded-full h-9 px-4 text-xs bg-transparent"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                <previousModule.icon className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">
                  Module {previousModule.id} — {previousModule.title}
                </span>
                <span className="sm:hidden">Précédent</span>
              </Button>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className="flex items-center gap-2 mx-4">
          {modules.map((mod, index) => (
            <div
              key={mod.id}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-6 bg-carnet-red'
                  : index < currentIndex
                  ? 'w-1.5 bg-[rgba(193,68,58,0.4)]'
                  : 'w-1.5 bg-[rgba(78,55,30,0.12)]'
              }`}
            />
          ))}
        </div>

        <div className="flex-1 flex justify-end">
          {nextModule ? (
            <Link to={`/formation/python-${nextModule.slug}`}>
              <Button
                size="sm"
                className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-9 px-4 text-xs border-0"
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
            <div className="flex items-center gap-2 text-carnet-red">
              <CheckCircle className="h-4 w-4" />
              <span className="font-instrument text-sm font-medium">Formation terminée !</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PythonModuleNavigation;
