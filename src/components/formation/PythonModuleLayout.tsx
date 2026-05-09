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
    <div className="min-h-screen carnet-paper carnet-cours-skin text-carnet-ink-soft">
      <PythonBreadcrumb />

      <div className="max-w-[1080px] mx-auto px-6 lg:pl-[200px] lg:pr-16 py-10 lg:py-14">
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
