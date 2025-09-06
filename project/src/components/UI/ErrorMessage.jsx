import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
      <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-red-800 mb-2">Erro ao carregar dados</h3>
      <p className="text-red-600 mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Tentar novamente
        </button>
      )}
    </div>
  );
};