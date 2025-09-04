import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, BookOpen, TrendingUp, Target, MessageSquare, CheckCircle } from 'lucide-react';

interface ModuleInfo {
  id: number;
  title: string;
  slug: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
  color: string;
}

const modules: ModuleInfo[] = [
  {
    id: 0,
    title: 'Première année',
    slug: 'premiere-annee',
    icon: BookOpen,
    color: 'blue'
  },
  {
    id: 1,
    title: 'Deuxième année',
    slug: 'deuxieme-annee',
    icon: TrendingUp,
    color: 'blue'
  },
  {
    id: 2,
    title: 'Ressources',
    slug: 'etudes-cas',
    icon: MessageSquare,
    color: 'blue'
  },
  {
    id: 3,
    title: 'Méthodologie',
    slug: 'methodologie',
    icon: Target,
    color: 'blue'
  }
];

const ESHModuleNavigation: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  // Determine current module
  const getCurrentModule = () => {
    for (const module of modules) {
      if (path.includes(module.slug)) {
        return module;
      }
    }
    return null;
  };

  const currentModule = getCurrentModule();
  if (!currentModule) return null;

  const currentIndex = modules.findIndex(m => m.id === currentModule.id);
  const previousModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
  const nextModule = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: 'bg-purple-500 hover:bg-purple-600 text-white'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-500 hover:bg-gray-600 text-white';
  };

  return (
    <div className="space-y-6">
      {/* Module Progression */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            {/* Previous Module */}
            <div className="flex-1">
              {previousModule ? (
                <Link to={`/formation/esh/${previousModule.slug}`}>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ChevronLeft className="h-4 w-4" />
                    <previousModule.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">
                      {previousModule.title}
                    </span>
                    <span className="sm:hidden">Précédent</span>
                  </Button>
                </Link>
              ) : (
                <div className="w-full"></div>
              )}
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center gap-2 mx-4">
              {modules.map((mod, index) => (
                <div
                  key={mod.id}
                  className={`w-2 h-2 rounded-full ${
                    index <= currentIndex ? 'bg-purple-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Next Module */}
            <div className="flex-1 flex justify-end">
              {nextModule ? (
                <Link to={`/formation/esh/${nextModule.slug}`}>
                  <Button size="sm" className={getColorClasses(nextModule.color)}>
                    <span className="hidden sm:inline">
                      {nextModule.title}
                    </span>
                    <span className="sm:hidden">Suivant</span>
                    <nextModule.icon className="h-4 w-4 ml-1" />
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <div className="flex items-center gap-2 text-purple-600">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Formation terminée !</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Module Info */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center`}>
              <currentModule.icon className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-purple-700">
                Module {currentIndex + 1} : {currentModule.title}
              </h3>
              <p className="text-sm text-gray-600">
                Vous êtes actuellement dans la section {currentModule.title.toLowerCase()} de la formation ESH
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ESHModuleNavigation;
