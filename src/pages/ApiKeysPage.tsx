
import React from 'react';
import { ApiKeyManager } from '@/components/ApiKeyManager';
import { ProtectedRoute } from '@/components/ProtectedRoute';

const ApiKeysPage = () => {
  return (
    <ProtectedRoute>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Gestion des clés API</h1>
        <div className="max-w-3xl mx-auto">
          <ApiKeyManager />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default ApiKeysPage;
