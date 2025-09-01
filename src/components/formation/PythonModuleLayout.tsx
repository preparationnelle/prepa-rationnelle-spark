import React, { ReactNode } from 'react';
import PythonBreadcrumb from './PythonBreadcrumb';
import PythonModuleNavigation from './PythonModuleNavigation';

interface PythonModuleLayoutProps {
  children: ReactNode;
  showNavigation?: boolean;
}

const PythonModuleLayout: React.FC<PythonModuleLayoutProps> = ({ 
  children, 
  showNavigation = true 
}) => {
  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Fil d'Ariane global, juste sous la navbar */}
      <PythonBreadcrumb />

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Contenu principal */}
        <div className="mb-8">
          {children}
        </div>

        {/* Navigation module */}
        {showNavigation && (
          <div className="mt-12">
            <PythonModuleNavigation />
          </div>
        )}
      </div>
    </div>
  );
};

export default PythonModuleLayout;