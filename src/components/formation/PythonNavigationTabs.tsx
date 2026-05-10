import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, CreditCard, FileText, PenTool } from 'lucide-react';

interface PythonNavigationTabsProps {
  className?: string;
}

const PythonNavigationTabs: React.FC<PythonNavigationTabsProps> = ({ className = "" }) => {
  const location = useLocation();

  const getActiveTab = () => {
    if (location.pathname === '/formation') return 'cours';
    if (location.pathname === '/formation/exercices') return 'exercices';
    if (location.pathname === '/python-flashcards') return 'flashcards';
    if (location.pathname === '/python-reference') return 'reference';
    if (location.pathname === '/pourquoi-python-prepa-ecg') return 'methodo';
    return 'cours';
  };

  const triggerClass =
    "rounded-full px-4 py-2 text-xs font-instrument font-medium text-carnet-ink-soft " +
    "data-[state=active]:bg-carnet-ink data-[state=active]:text-carnet-paper " +
    "data-[state=active]:shadow-sm transition-all cursor-pointer";

  return (
    <div className={`mx-auto font-instrument ${className}`}>
      <Tabs value={getActiveTab()} className="w-full">
        <div className="flex justify-center overflow-x-auto pb-1 scrollbar-hide">
          <TabsList className="inline-flex h-auto p-1 bg-carnet-paper-2 border border-[rgba(78,55,30,0.14)] rounded-full gap-1">
            <TabsTrigger value="methodo" asChild className={triggerClass}>
              <Link to="/pourquoi-python-prepa-ecg" className="flex items-center gap-2">
                <BookOpen className="h-3.5 w-3.5" />
                <span className="whitespace-nowrap">Méthodo</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="cours" asChild className={triggerClass}>
              <Link to="/formation" className="flex items-center gap-2">
                <BookOpen className="h-3.5 w-3.5" />
                <span className="whitespace-nowrap">Cours</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="exercices" asChild className={triggerClass}>
              <Link to="/formation/exercices" className="flex items-center gap-2">
                <PenTool className="h-3.5 w-3.5" />
                <span className="whitespace-nowrap">Exercices</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="flashcards" asChild className={triggerClass}>
              <Link to="/python-flashcards" className="flex items-center gap-2">
                <CreditCard className="h-3.5 w-3.5" />
                <span className="whitespace-nowrap">Flashcards</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="reference" asChild className={triggerClass}>
              <Link to="/python-reference" className="flex items-center gap-2">
                <FileText className="h-3.5 w-3.5" />
                <span className="whitespace-nowrap">Référence</span>
              </Link>
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
    </div>
  );
};

export default PythonNavigationTabs;
