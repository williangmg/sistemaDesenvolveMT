import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Página não encontrada
          </h2>
          <p className="text-gray-600 mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <div className="space-x-4">
          <Link
            to="/"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <Home className="h-4 w-4 mr-2" />
            Ir para início
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center bg-gray-100 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;