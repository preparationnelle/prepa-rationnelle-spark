import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    <div className="space-y-4">
      {/* Barre de progression entre modules */}
      <div className="relative bg-carnet-paper-2 rounded-2xl p-5 border border-dashed border-[rgba(78,55,30,0.18)] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-carnet-red" />
        <div className="flex items-center justify-between gap-4">
          {/* Précédent */}
          <div className="flex-1">
            {previousModule ? (
              <Link
                to={`/formation/esh/${previousModule.slug}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-dashed border-[rgba(78,55,30,0.25)] bg-carnet-paper text-carnet-ink-soft hover:text-carnet-red hover:border-carnet-red/40 font-instrument text-[12px] font-semibold transition-colors"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
                <previousModule.icon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{previousModule.title}</span>
                <span className="sm:hidden">Précédent</span>
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
                    ? 'w-8 bg-carnet-red'
                    : index < currentIndex
                    ? 'w-2 bg-carnet-red/40'
                    : 'w-2 bg-[rgba(78,55,30,0.18)]'
                }`}
              />
            ))}
          </div>

          {/* Suivant */}
          <div className="flex-1 flex justify-end">
            {nextModule ? (
              <Link
                to={`/formation/esh/${nextModule.slug}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-carnet-red hover:bg-carnet-red-deep text-white font-instrument text-[12px] font-semibold transition-colors"
              >
                <span className="hidden sm:inline">{nextModule.title}</span>
                <span className="sm:hidden">Suivant</span>
                <nextModule.icon className="h-3.5 w-3.5" />
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            ) : (
              <div className="flex items-center gap-2 text-carnet-red font-instrument text-[12px] font-semibold uppercase tracking-[0.08em]">
                <CheckCircle className="h-3.5 w-3.5" />
                <span>Formation terminée</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bandeau du module courant */}
      <div className="relative bg-carnet-paper-2 rounded-2xl p-5 border border-dashed border-[rgba(78,55,30,0.18)] overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-carnet-red" />
        <div className="flex items-center gap-4 pl-2">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)]">
            <Icon className="h-5 w-5 text-carnet-red" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="carnet-eyebrow text-[10px] mb-1 block">
              Module {currentIndex + 1} / {modules.length}
            </span>
            <h3 className="font-lora text-[20px] md:text-[22px] text-carnet-ink leading-tight">
              {currentModule.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESHModuleNavigation;
