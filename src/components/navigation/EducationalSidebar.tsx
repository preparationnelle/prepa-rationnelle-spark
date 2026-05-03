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
  { name: 'Maths', path: '/formation/maths', icon: Calculator, color: 'text-[#3D3D3A] bg-[#EFEDE3]' },
  { name: 'Python', path: '/formation', icon: Code, color: 'text-[#3D3D3A] bg-[#EFEDE3]' },
  { name: 'Anglais', path: '/formation/anglais', icon: Languages, color: 'text-[#3D3D3A] bg-[#EFEDE3]' },
  { name: 'Espagnol', path: '/formation/espagnol', icon: Languages, color: 'text-[#3D3D3A] bg-[#EFEDE3]' },
  { name: 'Allemand', path: '/formation/allemand', icon: Languages, color: 'text-[#3D3D3A] bg-[#EFEDE3]' },
  { name: 'Géopolitique', path: '/formation/geopolitique', icon: Globe, color: 'text-[#3D3D3A] bg-[#EFEDE3]' },
  { name: 'ESH', path: '/formation/esh', icon: GraduationCap, color: 'text-[#3D3D3A] bg-[#EFEDE3]' },
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
          "fixed left-0 top-14 bottom-0 z-[9998] hidden lg:flex flex-col bg-[#F5F4ED] border-r border-[#E8E6DC] transition-all duration-300 ease-in-out",
          isExpanded ? "w-80" : "w-2"
        )}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Indicateur visuel quand fermé */}
        {!isExpanded && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-24 bg-[#C96442] rounded-r-full opacity-50 hover:opacity-100 transition-opacity" />
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
              <BookOpen className="h-5 w-5 text-[#C96442]" />
              <h2 className="text-lg font-semibold text-[#2C2B28]">Espace Éducatif</h2>
            </div>
            <p className="text-xs text-[#6B6A63]">Formations et outils IA</p>
          </div>

          {/* Outils IA */}
          <div className="mb-6">
            <h3 className="text-[11px] font-medium text-[#8C8B82] uppercase tracking-wider mb-3 px-2">
              Outils IA
            </h3>
            <div className="space-y-0.5">
              {aiTools.map((tool) => (
                <Link
                  key={tool.path}
                  to={tool.path}
                  className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#EFEDE3] transition-colors duration-150"
                >
                  <div className="w-8 h-8 bg-[#EFEDE3] rounded-md flex items-center justify-center group-hover:bg-[#E8E6DC] transition-colors">
                    <tool.icon className="h-4 w-4 text-[#C96442]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-[#2C2B28]">
                      {tool.name}
                    </div>
                    <div className="text-xs text-[#6B6A63] truncate">
                      {tool.description}
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-[#8C8B82] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Séparateur */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E8E6DC]" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#F5F4ED] px-3 text-[11px] text-[#8C8B82] font-medium uppercase tracking-wider">
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
                  className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#EFEDE3] transition-colors duration-150"
                >
                  <div className={cn("w-8 h-8 rounded-md flex items-center justify-center", formation.color)}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-[#2C2B28] flex-1">
                    {formation.name}
                  </span>
                  <ChevronRight className="h-4 w-4 text-[#8C8B82] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              );
            })}
          </div>

          {/* Lien vers toutes les formations */}
          <div className="mt-6 pt-4 border-t border-[#E8E6DC]">
            <Link
              to="/formations"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#C96442] text-white rounded-md hover:bg-[#B5573A] transition-colors duration-150"
            >
              <BookOpen className="h-4 w-4" />
              <span className="text-sm font-medium">Toutes les formations</span>
            </Link>
          </div>
        </div>

        {/* Footer avec indication */}
        <div
          className={cn(
            "border-t border-[#E8E6DC] px-4 py-3 bg-[#F0EFE6] transition-opacity duration-200",
            isExpanded ? "opacity-100 delay-100" : "opacity-0 pointer-events-none"
          )}
        >
          <p className="text-xs text-[#8C8B82] text-center">
            Survolez le bord pour fermer
          </p>
        </div>
      </aside>

      {/* Overlay semi-transparent quand la sidebar est ouverte */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-[#2C2B28]/5 z-[9996] hidden lg:block transition-opacity duration-300"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
};

export default EducationalSidebar;
