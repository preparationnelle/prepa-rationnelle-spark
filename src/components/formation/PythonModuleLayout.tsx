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
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans text-pr-gray-dark">
      <PythonBreadcrumb />

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-10">
          {children}
        </div>

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
