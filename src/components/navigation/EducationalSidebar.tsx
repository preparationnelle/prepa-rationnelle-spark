import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  Code,
  Languages,
  Globe,
  GraduationCap,
  BookOpen,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormationItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface AIToolItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const formations: FormationItem[] = [
  { name: 'Maths', path: '/formation/maths', icon: Calculator },
  { name: 'Python', path: '/formation', icon: Code },
  { name: 'Anglais', path: '/formation/anglais', icon: Languages },
  { name: 'Espagnol', path: '/formation/espagnol', icon: Languages },
  { name: 'Allemand', path: '/formation/allemand', icon: Languages },
  { name: 'Géopolitique', path: '/formation/geopolitique', icon: Globe },
  { name: 'ESH', path: '/formation/esh', icon: GraduationCap },
];

const aiTools: AIToolItem[] = [
  {
    name: 'Générateur IA',
    path: '/generator',
    icon: Sparkles,
    description: 'Tous vos outils IA',
  },
  {
    name: 'Thème Grammatical',
    path: '/generator?tab=theme-grammatical',
    icon: Languages,
    description: 'Géopolitique & langues',
  },
];

const EducationalSidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Zone de détection au bord gauche */}
      <div
        className="fixed left-0 top-0 bottom-0 w-16 z-[9997] hidden lg:block"
        onMouseEnter={() => setIsExpanded(true)}
      />

      {/* Sidebar — design carnet */}
      <aside
        className={cn(
          'fixed left-0 top-14 bottom-0 z-[9998] hidden lg:flex flex-col transition-all duration-300 ease-in-out',
          'bg-carnet-paper-2 border-r border-dashed border-carnet-rule',
          'shadow-[4px_0_24px_rgba(78,55,30,0.04)]',
          isExpanded ? 'w-80' : 'w-2'
        )}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Onglet "marque-page" papier quand fermé */}
        {!isExpanded && (
          <div
            className={cn(
              'absolute left-0 top-1/3 -translate-y-1/2 z-10 cursor-pointer group',
              'bg-carnet-paper-2 border border-l-0 border-dashed border-carnet-rule rounded-r-md',
              'shadow-[4px_2px_16px_rgba(78,55,30,0.10)] py-6 px-2.5',
              'flex flex-col items-center gap-4 transition-all duration-300 hover:pl-3.5'
            )}
          >
            <div className="relative">
              <BookOpen className="h-5 w-5 text-carnet-red group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-carnet-red rounded-full animate-pulse" />
            </div>
            <span
              className="font-instrument text-[10px] font-bold text-carnet-ink uppercase tracking-[0.2em] whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Espace Éducatif
            </span>
            <ChevronRight className="h-4 w-4 text-carnet-red group-hover:translate-x-1 transition-transform" />
          </div>
        )}

        {/* Marge rouge interne (rappelle la marge du carnet) */}
        <div
          className={cn(
            'absolute top-0 bottom-0 left-3 w-px bg-carnet-red/30 transition-opacity duration-200',
            isExpanded ? 'opacity-100 delay-100' : 'opacity-0'
          )}
        />

        {/* Contenu de la sidebar */}
        <div
          className={cn(
            'flex-1 overflow-y-auto px-5 py-6 transition-opacity duration-200',
            isExpanded ? 'opacity-100 delay-100' : 'opacity-0 pointer-events-none'
          )}
        >
          {/* En-tête */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5 text-carnet-red" />
              <h2 className="font-lora text-lg font-semibold text-carnet-ink">
                Espace Éducatif
              </h2>
            </div>
            <p className="font-instrument text-xs text-carnet-ink-mute">
              Formations et outils IA
            </p>
          </div>

          {/* Outils IA */}
          <div className="mb-5">
            <h3 className="font-instrument text-[11px] font-bold text-carnet-red uppercase tracking-[0.2em] mb-3 px-1">
              Outils IA
            </h3>
            <div className="space-y-0.5">
              {aiTools.map((tool) => (
                <Link
                  key={tool.path}
                  to={tool.path}
                  className="group flex items-center gap-3 px-2 py-2 rounded-sm hover:bg-carnet-red/5 transition-colors duration-150"
                >
                  <div className="w-8 h-8 bg-carnet-red/10 rounded-sm flex items-center justify-center group-hover:bg-carnet-red/15 transition-colors">
                    <tool.icon className="h-4 w-4 text-carnet-red" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-instrument text-sm font-medium text-carnet-ink">
                      {tool.name}
                    </div>
                    <div className="font-instrument text-xs text-carnet-ink-mute truncate">
                      {tool.description}
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-carnet-ink-mute opacity-0 group-hover:opacity-100 group-hover:text-carnet-red transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Séparateur pointillé carnet */}
          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-dashed border-carnet-rule" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-carnet-paper-2 px-3 font-instrument text-[11px] text-carnet-red font-bold uppercase tracking-[0.2em]">
                Formations
              </span>
            </div>
          </div>

          {/* Formations */}
          <div className="space-y-0.5">
            {formations.map((formation) => {
              const Icon = formation.icon;
              return (
                <Link
                  key={formation.path}
                  to={formation.path}
                  className="group flex items-center gap-3 px-2 py-2 rounded-sm hover:bg-carnet-red/5 transition-colors duration-150"
                >
                  <div className="w-8 h-8 bg-carnet-red/10 rounded-sm flex items-center justify-center group-hover:bg-carnet-red/15 transition-colors">
                    <Icon className="h-4 w-4 text-carnet-red" />
                  </div>
                  <span className="font-instrument text-sm text-carnet-ink flex-1">
                    {formation.name}
                  </span>
                  <ChevronRight className="h-4 w-4 text-carnet-ink-mute opacity-0 group-hover:opacity-100 group-hover:text-carnet-red transition-all" />
                </Link>
              );
            })}
          </div>

          {/* CTA toutes formations — bouton ink carnet */}
          <div className="mt-6 pt-4 border-t border-dashed border-carnet-rule">
            <Link
              to="/formations"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-carnet-ink text-carnet-paper rounded-full hover:bg-carnet-red transition-colors duration-200"
            >
              <BookOpen className="h-4 w-4" />
              <span className="font-instrument text-sm font-semibold tracking-wide">
                Toutes les formations
              </span>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div
          className={cn(
            'border-t border-dashed border-carnet-rule px-4 py-3 transition-opacity duration-200',
            isExpanded ? 'opacity-100 delay-100' : 'opacity-0 pointer-events-none'
          )}
        >
          <p className="font-hand text-sm text-carnet-red/80 text-center leading-tight">
            survolez le bord pour fermer →
          </p>
        </div>
      </aside>

      {/* Overlay très léger papier */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-carnet-ink/[0.03] z-[9996] hidden lg:block transition-opacity duration-300"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
};

export default EducationalSidebar;
