import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home, BookOpen, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  current?: boolean;
}

const PythonBreadcrumb: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [
      { label: 'Accueil', href: '/', icon: Home },
      { label: 'Formation', href: '/formation', icon: BookOpen }
    ];

    // Python specific breadcrumbs
    if (path.includes('python')) {
      if (path.includes('fondamentaux')) {
        items.push({
          label: 'Module 0 - Fondamentaux',
          href: path.includes('exercices') ? '/formation/python-fondamentaux' : undefined,
          icon: Code,
          current: !path.includes('exercices')
        });
        if (path.includes('exercices')) {
          items.push({
            label: 'Exercices',
            current: true
          });
        }
      } else if (path.includes('matrices')) {
        items.push({
          label: 'Module 1 - Matrices',
          href: path.includes('exercices') ? '/formation/python-matrices' : undefined,
          icon: Code,
          current: !path.includes('exercices')
        });
        if (path.includes('exercices')) {
          items.push({
            label: 'Exercices',
            current: true
          });
        }
      } else if (path.includes('analyse')) {
        items.push({
          label: 'Module 2 - Analyse',
          href: path.includes('exercices') ? '/formation/python-analyse' : undefined,
          icon: Code,
          current: !path.includes('exercices')
        });
        if (path.includes('exercices')) {
          items.push({
            label: 'Exercices',
            current: true
          });
        }
      } else if (path.includes('probabilites')) {
        items.push({
          label: 'Module 3 - Probabilités',
          href: path.includes('exercices') ? '/formation/python-probabilites' : undefined,
          icon: Code,
          current: !path.includes('exercices')
        });
        if (path.includes('exercices')) {
          items.push({
            label: 'Exercices',
            current: true
          });
        }
      }
    }

    return items;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav className="flex items-center text-sm text-muted-foreground mb-6">
      {breadcrumbs.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 text-muted-foreground/50 mx-2" />}
          
          {item.href && !item.current ? (
            <Link
              to={item.href}
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              <span>{item.label}</span>
            </Link>
          ) : (
            <span
              className={cn(
                "flex items-center gap-1.5",
                item.current && "text-foreground font-medium"
              )}
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              <span>{item.label}</span>
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default PythonBreadcrumb;