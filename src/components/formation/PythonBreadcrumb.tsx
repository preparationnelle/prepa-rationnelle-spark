import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home, BookOpen, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  current?: boolean;
  isPythonLabel?: boolean;
}

const PythonBreadcrumb: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [
      { label: 'Accueil', href: '/', icon: Home },
      { label: 'Toutes les formations', href: '/formations', icon: BookOpen },
      { label: 'Formation Python ECG', href: '/formation', icon: Code, isPythonLabel: true }
    ];

    if (path.includes('python')) {
      if (path.includes('fondamentaux')) {
        items.push({
          label: 'Module 0 — Fondamentaux',
          href: path.includes('exercices') ? '/formation/python-fondamentaux' : undefined,
          icon: Code,
          current: !path.includes('exercices')
        });
        if (path.includes('exercices')) {
          items.push({ label: 'Exercices', current: true });
        }
      } else if (path.includes('matrices')) {
        items.push({
          label: 'Module 1 — Matrices',
          href: path.includes('exercices') ? '/formation/python-matrices' : undefined,
          icon: Code,
          current: !path.includes('exercices')
        });
        if (path.includes('exercices')) {
          items.push({ label: 'Exercices', current: true });
        }
      } else if (path.includes('analyse')) {
        items.push({
          label: 'Module 2 — Analyse',
          href: path.includes('exercices') ? '/formation/python-analyse' : undefined,
          icon: Code,
          current: !path.includes('exercices')
        });
        if (path.includes('exercices')) {
          items.push({ label: 'Exercices', current: true });
        }
      } else if (path.includes('probabilites')) {
        items.push({
          label: 'Module 3 — Probabilités',
          href: path.includes('exercices') ? '/formation/python-probabilites' : undefined,
          icon: Code,
          current: !path.includes('exercices')
        });
        if (path.includes('exercices')) {
          items.push({ label: 'Exercices', current: true });
        }
      }
    }

    return items;
  };

  const breadcrumbs = getBreadcrumbs();

  const renderLabel = (item: BreadcrumbItem) => {
    if (item.isPythonLabel) {
      return (
        <span>
          Formation <span className="text-pr-orange font-semibold">Python</span> ECG
        </span>
      );
    }
    return <span>{item.label}</span>;
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-pr-gray-light/60 font-dm-sans">
      {/* Trait orange signature en haut */}
      <div className="h-[2px] w-full bg-pr-orange" />
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex items-center text-[11px] uppercase tracking-wider text-pr-gray-mid">
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <ChevronRight className="h-3 w-3 text-pr-gray-light mx-1.5" />}

              {item.href && !item.current ? (
                <Link
                  to={item.href}
                  className="flex items-center gap-1.5 hover:text-pr-orange-dark transition-colors"
                >
                  {item.icon && <item.icon className="h-3 w-3" />}
                  {renderLabel(item)}
                </Link>
              ) : (
                <span
                  className={cn(
                    'flex items-center gap-1.5',
                    item.current && 'text-pr-black font-semibold normal-case tracking-normal'
                  )}
                >
                  {item.icon && <item.icon className="h-3 w-3" />}
                  {renderLabel(item)}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default PythonBreadcrumb;
