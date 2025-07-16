import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, CreditCard, FileText } from 'lucide-react';

interface PythonNavigationTabsProps {
  className?: string;
}

const PythonNavigationTabs: React.FC<PythonNavigationTabsProps> = ({ className = "" }) => {
  const location = useLocation();
  
  const getActiveTab = () => {
    if (location.pathname === '/formation') return 'cours';
    if (location.pathname === '/python-flashcards') return 'flashcards';
    if (location.pathname === '/python-reference') return 'reference';
    return 'cours';
  };

  return (
    <div className={`container mx-auto px-4 ${className}`}>
      <Tabs value={getActiveTab()} className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
          <TabsTrigger value="cours" asChild>
            <Link to="/formation" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Cours</span>
            </Link>
          </TabsTrigger>
          <TabsTrigger value="flashcards" asChild>
            <Link to="/python-flashcards" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span className="hidden sm:inline">Flashcards Python</span>
            </Link>
          </TabsTrigger>
          <TabsTrigger value="reference" asChild>
            <Link to="/python-reference" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Référence Python</span>
            </Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default PythonNavigationTabs;