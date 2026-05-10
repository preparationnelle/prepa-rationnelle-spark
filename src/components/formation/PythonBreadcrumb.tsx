import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
  isPythonLabel?: boolean;
}

const PythonBreadcrumb: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [
      { label: 'Accueil', href: '/' },
      { label: 'Formations', href: '/formations' },
      { label: 'Formation Python ECG', href: '/formation', isPythonLabel: true },
    ];

    if (path.includes('python')) {
      if (path.includes('fondamentaux')) {
        items.push({
          label: 'Module 0 — Fondamentaux',
          href: path.includes('exercices') ? '/formation/python-fondamentaux' : undefined,
          current: !path.includes('exercices'),
        });
        if (path.includes('exercices')) {
          items.push({ label: 'Exercices', current: true });
        }
      } else if (path.includes('matrices')) {
        items.push({
          label: 'Module 1 — Matrices',
          href: path.includes('exercices') ? '/formation/python-matrices' : undefined,
          current: !path.includes('exercices'),
        });
        if (path.includes('exercices')) {
          items.push({ label: 'Exercices', current: true });
        }
      } else if (path.includes('analyse')) {
        items.push({
          label: 'Module 2 — Analyse',
          href: path.includes('exercices') ? '/formation/python-analyse' : undefined,
          current: !path.includes('exercices'),
        });
        if (path.includes('exercices')) {
          items.push({ label: 'Exercices', current: true });
        }
      } else if (path.includes('probabilites')) {
        items.push({
          label: 'Module 3 — Probabilités',
          href: path.includes('exercices') ? '/formation/python-probabilites' : undefined,
          current: !path.includes('exercices'),
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
          Formation <em className="italic text-carnet-red not-italic font-semibold">Python</em> ECG
        </span>
      );
    }
    return <span>{item.label}</span>;
  };

  return (
    <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center">
              {index === 0 && (
                <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors mr-1">
                  <Home className="h-3.5 w-3.5" />
                </Link>
              )}
              {index > 0 && <ChevronRight className="h-3 w-3 mx-2 opacity-50" />}
              {index === 0 ? null : item.href && !item.current ? (
                <Link
                  to={item.href}
                  className="hover:text-carnet-red transition-colors"
                >
                  {renderLabel(item)}
                </Link>
              ) : (
                <span
                  className={cn(
                    item.current && 'carnet-eyebrow text-[11px]'
                  )}
                >
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
