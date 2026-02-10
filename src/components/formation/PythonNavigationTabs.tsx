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

  return (
    <div className={`container mx-auto px-4 ${className}`}>
      <Tabs value={getActiveTab()} className="w-full">
        <div className="flex justify-center overflow-x-auto pb-1 scrollbar-hide">
          <TabsList className="inline-flex h-auto p-1 bg-white border border-slate-200 rounded-full shadow-sm gap-1">
            <TabsTrigger value="methodo" asChild className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-slate-900 data-[state=active]:text-white transition-all cursor-pointer">
              <Link to="/pourquoi-python-prepa-ecg" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="whitespace-nowrap">Méthodo</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="cours" asChild className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-slate-900 data-[state=active]:text-white transition-all cursor-pointer">
              <Link to="/formation" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="whitespace-nowrap">Cours</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="exercices" asChild className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-slate-900 data-[state=active]:text-white transition-all cursor-pointer">
              <Link to="/formation/exercices" className="flex items-center gap-2">
                <PenTool className="h-4 w-4" />
                <span className="whitespace-nowrap">Exercices</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="flashcards" asChild className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-slate-900 data-[state=active]:text-white transition-all cursor-pointer">
              <Link to="/python-flashcards" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span className="whitespace-nowrap">Flashcards</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="reference" asChild className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-slate-900 data-[state=active]:text-white transition-all cursor-pointer">
              <Link to="/python-reference" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
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