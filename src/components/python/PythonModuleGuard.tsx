import React, { useEffect } from 'react';
import { usePythonModuleAccess } from '@/hooks/usePythonModuleAccess';
import { PythonRestrictedAccessModal } from './PythonRestrictedAccessModal';

interface PythonModuleGuardProps {
  moduleId: number;
  moduleName: string;
  children: React.ReactNode;
}

export const PythonModuleGuard: React.FC<PythonModuleGuardProps> = ({ 
  moduleId, 
  moduleName, 
  children 
}) => {
  const { 
    checkModuleAccess, 
    showRestrictedModal, 
    currentModule, 
    handleModalClose 
  } = usePythonModuleAccess();

  useEffect(() => {
    checkModuleAccess(moduleId, moduleName);
  }, [moduleId, moduleName]);

  return (
    <>
      {children}
      {showRestrictedModal && currentModule && (
        <PythonRestrictedAccessModal
          isOpen={showRestrictedModal}
          onClose={handleModalClose}
          moduleId={currentModule.id}
          moduleName={currentModule.name}
        />
      )}
    </>
  );
};