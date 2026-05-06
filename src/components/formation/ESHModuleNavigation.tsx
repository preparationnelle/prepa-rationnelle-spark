import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  TrendingUp,
  Target,
  MessageSquare,
  CheckCircle,
} from 'lucide-react';

interface ModuleInfo {
  id: number;
  title: string;
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
}

const modules: ModuleInfo[] = [
  { id: 0, title: 'Première année', slug: 'premiere-annee', icon: BookOpen },
  { id: 1, title: 'Deuxième année', slug: 'deuxieme-annee', icon: TrendingUp },
  { id: 2, title: 'Ressources', slug: 'etudes-cas', icon: MessageSquare },
  { id: 3, title: 'Méthodologie', slug: 'methodologie', icon: Target },
];

const ESHModuleNavigation: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

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

  const currentIndex = modules.findIndex((m) => m.id === currentModule.id);
  const previousModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
  const nextModule =
    currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

  const Icon = currentModule.icon;

  return (
    <div className="space-y-5 font-dm-sans">
      {/* Barre de progression entre modules */}
      <div className="relative bg-white rounded-2xl p-5 border border-pr-gray-light shadow-sm overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-pr-orange" />
        <div className="flex items-center justify-between gap-4">
          {/* Précédent */}
          <div className="flex-1">
            {previousModule ? (
              <Link to={`/formation/esh/${previousModule.slug}`}>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange-soft transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <previousModule.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{previousModule.title}</span>
                  <span className="sm:hidden">Précédent</span>
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* Indicateur de progression */}
          <div className="flex items-center gap-2 mx-2">
            {modules.map((mod, index) => (
              <div
                key={mod.id}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-pr-orange'
                    : index < currentIndex
                    ? 'w-2 bg-pr-orange-soft'
                    : 'w-2 bg-pr-gray-light'
                }`}
              />
            ))}
          </div>

          {/* Suivant */}
          <div className="flex-1 flex justify-end">
            {nextModule ? (
              <Link to={`/formation/esh/${nextModule.slug}`}>
                <Button
                  size="sm"
                  className="bg-pr-orange hover:bg-pr-orange-dark text-white flex items-center gap-2"
                >
                  <span className="hidden sm:inline">{nextModule.title}</span>
                  <span className="sm:hidden">Suivant</span>
                  <nextModule.icon className="h-4 w-4" />
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <div className="flex items-center gap-2 text-pr-orange-dark text-sm font-semibold uppercase tracking-[0.08em]">
                <CheckCircle className="h-4 w-4" />
                <span>Formation terminée</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bandeau du module courant */}
      <div className="relative bg-white rounded-2xl p-5 border border-pr-gray-light shadow-sm overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-pr-orange" />
        <div className="flex items-center gap-4 pl-2">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-pr-orange-pale border border-pr-orange-soft/40">
            <Icon className="h-5 w-5 text-pr-orange-dark" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark mb-1">
              Module {currentIndex + 1} / {modules.length}
            </span>
            <h3 className="font-dm-serif text-xl md:text-2xl text-pr-black leading-tight">
              {currentModule.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESHModuleNavigation;
