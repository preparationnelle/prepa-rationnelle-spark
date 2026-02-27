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
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormationItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface AIToolItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const formations: FormationItem[] = [
  { name: 'Maths', path: '/formation/maths', icon: Calculator, color: 'text-orange-600 bg-orange-50' },
  { name: 'Python', path: '/formation', icon: Code, color: 'text-blue-600 bg-blue-50' },
  { name: 'Anglais', path: '/formation/anglais', icon: Languages, color: 'text-green-600 bg-green-50' },
  { name: 'Espagnol', path: '/formation/espagnol', icon: Languages, color: 'text-red-600 bg-red-50' },
  { name: 'Allemand', path: '/formation/allemand', icon: Languages, color: 'text-yellow-600 bg-yellow-50' },
  { name: 'Géopolitique', path: '/formation/geopolitique', icon: Globe, color: 'text-purple-600 bg-purple-50' },
  { name: 'ESH', path: '/formation/esh', icon: GraduationCap, color: 'text-indigo-600 bg-indigo-50' },
];

const aiTools: AIToolItem[] = [
  {
    name: 'Générateur IA',
    path: '/generator',
    icon: Sparkles,
    description: 'Tous vos outils IA'
  },
  {
    name: 'Thème Grammatical',
    path: '/generator?tab=theme-grammatical',
    icon: Languages,
    description: 'Géopolitique & langues'
  },
];

const EducationalSidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Zone de détection pour activer la sidebar */}
      <div
        className="fixed left-0 top-0 bottom-0 w-16 z-[9997] hidden lg:block"
        onMouseEnter={() => setIsExpanded(true)}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-14 bottom-0 z-[9998] hidden lg:flex flex-col bg-white/95 backdrop-blur-xl border-r border-gray-200 shadow-2xl transition-all duration-300 ease-in-out",
          isExpanded ? "w-80" : "w-2"
        )}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Indicateur visuel quand fermé */}
        {!isExpanded && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-32 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 rounded-r-full opacity-60 hover:opacity-100 transition-opacity" />
        )}

        {/* Contenu de la sidebar */}
        <div
          className={cn(
            "flex-1 overflow-y-auto px-4 py-6 transition-opacity duration-200",
            isExpanded ? "opacity-100 delay-100" : "opacity-0 pointer-events-none"
          )}
        >
          {/* En-tête */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5 text-orange-600" />
              <h2 className="text-lg font-bold text-gray-900">Espace Éducatif</h2>
            </div>
            <p className="text-xs text-gray-500">Formations et outils IA</p>
          </div>

          {/* Outils IA */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
              Outils IA
            </h3>
            <div className="space-y-1">
              {aiTools.map((tool) => (
                <Link
                  key={tool.path}
                  to={tool.path}
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100/50 transition-all duration-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    <tool.icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                      {tool.name}
                    </div>
                    <div className="text-xs text-gray-500 truncate">
                      {tool.description}
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Séparateur */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-xs text-gray-400 font-medium">
                Formations
              </span>
            </div>
          </div>

          {/* Formations */}
          <div className="space-y-1">
            {formations.map((formation) => {
              const Icon = formation.icon;
              return (
                <Link
                  key={formation.path}
                  to={formation.path}
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", formation.color)}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 flex-1">
                    {formation.name}
                  </span>
                  <ChevronRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              );
            })}
          </div>

          {/* Lien vers toutes les formations */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Link
              to="/formations"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <BookOpen className="h-4 w-4" />
              <span className="text-sm font-medium">Toutes les formations</span>
            </Link>
          </div>
        </div>

        {/* Footer avec indication */}
        <div
          className={cn(
            "border-t border-gray-200 px-4 py-3 bg-gray-50/50 transition-opacity duration-200",
            isExpanded ? "opacity-100 delay-100" : "opacity-0 pointer-events-none"
          )}
        >
          <p className="text-xs text-gray-500 text-center">
            Survolez le bord pour fermer
          </p>
        </div>
      </aside>

      {/* Overlay semi-transparent quand la sidebar est ouverte */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/5 z-[9996] hidden lg:block backdrop-blur-[1px] transition-opacity duration-300"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
};

export default EducationalSidebar;
